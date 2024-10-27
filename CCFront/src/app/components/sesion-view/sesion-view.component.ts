import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtoProblema } from '../../dtos/DtoProblema';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtoSesion } from '../../dtos/DtoSesion';
import { DtoComentarioSesion } from '../../dtos/DtoComentarioSesion';
import { SesionService } from '../../services/sesion.service';
import { PacienteService } from '../../services/PacienteService';
import { PsicologoService } from '../../services/psicologo.service';
import { ExpedienteService } from '../../services/ExpedienteService';
import {ProblemaComponent} from './problema/problema.component';
import { ComentarioComponent } from './comentario/comentario.component';

@Component({
  selector: 'app-sesion-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProblemaComponent, CommonModule, ComentarioComponent],
  templateUrl: './sesion-view.component.html',
  styleUrl: './sesion-view.component.css',
})
export class SesionViewComponent {


  //Refactorización de variables en base a la logica de 'marcos'
  problemas: DtoProblema[] = [];  //lista para guardar la lista de problemas de la sesión
  comentarios: DtoComentarioSesion[] = [] //lista para guardar la lista de comentarios de la sesión 

  // Comienza valoración general de la sesión
  contactoVisualElement = new FormControl('');
  hablaLenguajeElement = new FormControl('');
  velocidadHablaElement = new FormControl('');
  volumenVozElement = new FormControl('');
  articulacionElement = new FormControl('');
  coherenciaElement = new FormControl('');
  espontaneidadElement = new FormControl('');

  // Termina valoración general de la sesión

  //Evaluacion general
  vestimentaElement = new FormControl('');
  nivelGeneralBienestarElement = new FormControl('');
  arregloPersonalElement = new FormControl('');
  posturaElement = new FormControl('');

  //comentario psicologa
  comentarioPsicologaElement = new FormControl('');

  constructor(
    private sesionService: SesionService,
    private pacienteService: PacienteService,
    private psicologoService: PsicologoService,
    private expedienteService: ExpedienteService
  ){}

  private getNumberFormControl (formControl: FormControl): number {
    let toReturn = formControl.value || 0;
    
    if (typeof toReturn == "string") {
      toReturn = parseInt(toReturn)
    }

    return toReturn;
  }

  //Agrega un componente problema a la vista de la sesión
  agregarProblema(): void{
    let problema: DtoProblema = new DtoProblema(
      null, 
      "", 
      "", 
      0, 
      0, 
      0, 
      0, 
      0, 
      0, 
      0, 
      0  
    );

    this.problemas.push(problema);
  }

  //Regresa los problemas de los componentes <<Problema>>
  private obtenerProblemas(): DtoProblema[] {
    return this.problemas;
  }


  //Agrega un componente comentario a la vista de la sesión
  agregarComentario(): void {
    let comentario: DtoComentarioSesion = new DtoComentarioSesion(
        null,           
        "",                        
        0,              
        0               
    );

    this.comentarios.push(comentario);
  }


  //Regresa los comentarios de los componentes hijos <<Sesion>>
  private obtenerComentariosSesion(): DtoComentarioSesion[] {
    return this.comentarios;
  }

  //Se recopila toda la información necesaria del componente para inicializar los datos 
  //de la Sesion
  private obtenerInformacionSesion(): DtoSesion {

    const listaProblemas = this.obtenerProblemas();
    const listaComentariosSesion = this.obtenerComentariosSesion();

    const expedienteActual = this.expedienteService.obtenerExpedienteActual();

    const sesion: DtoSesion = {
      comentarios: listaComentariosSesion,
      id: null,
      problemasSesion: listaProblemas,
      psicologo: this.psicologoService.getPsicologoActual(),
      expediente: expedienteActual,
      fecha: new Date().toISOString(),
      puntuacionVestimenta: this.getNumberFormControl(this.vestimentaElement),
      puntuacionArregloPersonal: this.getNumberFormControl(this.arregloPersonalElement),
      puntuacionArticulacion: this.getNumberFormControl(this.articulacionElement),
      puntuacionBienestar: this.getNumberFormControl(this.nivelGeneralBienestarElement),
      puntuacionCoherencia: this.getNumberFormControl(this.coherenciaElement),
      puntuacionContactoVisual: this.getNumberFormControl(this.contactoVisualElement),
      puntuacionEspontaneidad: this.getNumberFormControl(this.espontaneidadElement),
      puntuacionHabla: this.getNumberFormControl(this.hablaLenguajeElement),
      puntuacionVelocidadHabla: this.getNumberFormControl(this.velocidadHablaElement),
      puntuacionVolumenHabla: this.getNumberFormControl(this.volumenVozElement),
      puntuacionPostura: this.getNumberFormControl(this.posturaElement),
      comentarioPsicologa: this.comentarioPsicologaElement.value || "SIN COMENTARIO",
    }

    return sesion;
  }

  //se acciona al presionar el botón de <<terminar Sesión>> para acceder al servicio
  //que guarda la sesión en la base de datos
  terminarSesion() {
    const sesion = this.obtenerInformacionSesion();

    console.log(sesion);
    console.log(this.problemas);
    console.log(this.comentarios);
    this.sesionService.guardarSesion(sesion);
  }

}
