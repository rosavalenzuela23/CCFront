import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtoProblema } from '../../dtos/DtoProblema';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DtoSesion } from '../../dtos/DtoSesion';
import { DtoComentarioSesion } from '../../dtos/DtoComentarioSesion';
import { SesionService } from '../../services/sesion.service';
import { PacienteService } from '../../services/PacienteService';
import { PsicologoService } from '../../services/psicologo.service';
import { ExpedienteService } from '../../services/ExpedienteService';
import {ProblemaComponent} from './problema/problema.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ProblemaSesionComponent } from '../sesiones-view/detail-sesion/full-sesion/problem-sesion/problem-sesion.component';

@Component({
  selector: 'app-sesion-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProblemaComponent, CommonModule, ComentarioComponent],
  templateUrl: './sesion-view.component.html',
  styleUrl: './sesion-view.component.css',
})
export class SesionViewComponent {


  //Refactorización de variables en base a la logica de 'marcos'
  formularioPrincipal: FormGroup;

  get problemas(): FormArray<FormGroup> {
    return this.formularioPrincipal.get('problemas') as FormArray<FormGroup>;
  }
  
  get comentarios(): FormArray<FormGroup>{
    return this.formularioPrincipal.get('comentarios') as FormArray<FormGroup>;
  }

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
  ){
    this.formularioPrincipal = new FormGroup({
      problemas: new FormArray<FormGroup>([]),
      comentarios: new FormArray<FormGroup>([])
    });
  }

  private getNumberFormControl (formControl: FormControl): number {
    let toReturn = formControl.value || 0;
    
    if (typeof toReturn == "string") {
      toReturn = parseInt(toReturn)
    }

    return toReturn;
  }

  //Agrega un componente problema a la vista de la sesión
  agregarProblema(): void{
    
    let nuevoProblemaForm = new FormGroup({
        descripcionElement: new FormControl('', Validators.required),
        frecuenciaElement: new FormControl('', Validators.required),
        intensidadElement: new FormControl('', Validators.required),
        afectacionFamiliarElement: new FormControl('', Validators.required),
        afectacionSaludElement: new FormControl('', Validators.required),
        afectacionParejaElement: new FormControl('', Validators.required),
        afectacionAmigosElement: new FormControl('', Validators.required),
        afectacionLaboralElement: new FormControl('', Validators.required),
        afectacionEspiritualElement: new FormControl('', Validators.required),
        afectacionEconomicoElement: new FormControl('', Validators.required)  
    });
    console.log(nuevoProblemaForm);
    
    this.problemas.push(nuevoProblemaForm);
    console.log(this.problemas);
  }

  //Regresa los problemas de los componentes <<Problema>>
  private obtenerProblemas(): DtoProblema[] {
    return this.problemas.controls.map(control => {
      const problemaFormGroup = control as FormGroup;
      console.log("Problema form group");
      console.log(problemaFormGroup);
     
      return new DtoProblema(
        null,  // o el valor correspondiente
        problemaFormGroup.get('descripcionElement')?.value || '',
        problemaFormGroup.get('frecuenciaElement')?.value || '',
        parseInt(problemaFormGroup.get('intensidadElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionFamiliarElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionSaludElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionParejaElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionAmigosElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionLaboralElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionEspiritualElement')?.value) || 0,
        parseInt(problemaFormGroup.get('afectacionEconomicoElement')?.value) || 0
      );
    });
  }


  //Agrega un componente comentario a la vista de la sesión
  agregarComentario(): void {

    let nuevoComentarioForm = new FormGroup({
      aspectoAMedirElement: new FormControl('', Validators.required),
      valoracionInicioElement: new FormControl('', Validators.required),
      valoracionFinElement: new FormControl('', Validators.required) 
    });

    console.log(nuevoComentarioForm);
    this.comentarios.push(nuevoComentarioForm);
    console.log(this.comentarios);

  }


  //Regresa los comentarios de los componentes hijos <<Sesion>>
  private obtenerComentariosSesion(): DtoComentarioSesion[] {

    return this.comentarios.controls.map(control => {
      const comentarioFormGroup = control as FormGroup;
      console.log("Comentario form group");
      console.log(comentarioFormGroup);
     
      return new DtoComentarioSesion(
        null,  // 
        comentarioFormGroup.get('aspectoAMedirElement')?.value,
        parseInt(comentarioFormGroup.get('valoracionInicioElement')?.value),
        parseInt(comentarioFormGroup.get('valoracionFinElement')?.value)
      );
    });
  }

  //Se recopila toda la información necesaria del componente para inicializar los datos 
  //de la Sesion
  private obtenerInformacionSesion(): DtoSesion {

    const listaProblemas = this.obtenerProblemas();
    console.log(listaProblemas);

    
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
    if (!this.formularioPrincipal.valid) {
      console.log("Formulario inválido");
      return;
    }else{
      const sesion = this.obtenerInformacionSesion();

      console.log(sesion);
      console.log(this.problemas);
      console.log(this.comentarios);
      this.sesionService.guardarSesion(sesion);
    }
    
  }

}
