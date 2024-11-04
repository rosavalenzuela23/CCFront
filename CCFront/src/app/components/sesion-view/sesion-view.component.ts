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
import { ControlName, ControlNameValidator } from '../../util/control-name-validators';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';
import { noSpaces } from '../../util/Validators';


type errorType = {
  title: string,
  message: string,
  idComponente: string
}

@Component({
  selector: 'app-sesion-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProblemaComponent, CommonModule, ComentarioComponent, MensajeErrorComponent],
  templateUrl: './sesion-view.component.html',
  styleUrl: './sesion-view.component.css',
})
export class SesionViewComponent {


  //El formulario principal que contiene todos los componentes hijos y campos a validar dentro de esta vista
  formularioPrincipal: FormGroup;

   //Lista de errores a mostrar en la vista
   errores: errorType[] = [];

  //Lista de problemas y comentarios que se van a agregar a la vista en forma de FormGroups
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
  comentarioPsicologaElement = new FormControl('', [Validators.required, noSpaces()]);


  constructor(
    private sesionService: SesionService,
    private pacienteService: PacienteService,
    private psicologoService: PsicologoService,
    private expedienteService: ExpedienteService
  ){
    this.formularioPrincipal = new FormGroup({
      problemas: new FormArray<FormGroup>([]),
      comentarios: new FormArray<FormGroup>([]),
      comentarioPsicologo: this.comentarioPsicologaElement
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
        descripcionElement: new FormControl('', [Validators.required, noSpaces()]),
        frecuenciaElement: new FormControl('', [Validators.required, noSpaces()]),
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
        null, 
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
      aspectoAMedirElement: new FormControl('', [Validators.required, noSpaces()]),
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

  //Agrega un error a la lista de errores para mostrar en la vista
  private agregarError(controlName: string, validator: string){

    this.errores.push({
      idComponente:`${controlName}+${validator}+${Date.now()}_${Math.random()}`,
      message: `${ControlName[controlName]} no cumple: ${ControlNameValidator[validator]}`,
      title: `Error en el campo ${ControlName[controlName]}`
    })
    console.log(this.errores);
  }


  // Valida los controles dentro de un FormGroup y agrega errores según corresponda
  private obtenerValidadores(controladoresFormGroup: string[], formGroup: FormGroup) {

    for (const controlName of controladoresFormGroup) {

      const formControl = formGroup.get(controlName);
      const validators: string[] = Object.getOwnPropertyNames(formControl?.errors || {})
      
      for (const validator of validators) {

        this.agregarError(controlName, validator);
        
      }

    }
  }


  // Valida todos los controles en el formulario principal, incluyendo FormArrays, FormGroups y FormControls
  private async validarCamposDeSesion() {
    
    this.errores = [];
    const controles: string[] = Object.getOwnPropertyNames(this.formularioPrincipal.controls);
    for (const controlName of controles) {

      const formControl = this.formularioPrincipal.get(controlName);

      if(formControl instanceof FormArray){

        for (const control of formControl.controls) {
          
          const formGroup = control as FormGroup;
          const controlesFormGroup: string[] = Object.getOwnPropertyNames(formGroup.controls);
          this.obtenerValidadores(controlesFormGroup, formGroup);
        
        }
      
      }else if(formControl instanceof FormGroup){
        
        const controlesFormGroup: string[] = Object.getOwnPropertyNames(formControl.controls);
        this.obtenerValidadores(controlesFormGroup, formControl);
    
      }else if(formControl instanceof FormControl){  
        
        this.obtenerValidadores([controlName], this.formularioPrincipal);
        
      }

    }

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
    
    if (this.formularioPrincipal.invalid) {
      this.validarCamposDeSesion();
      return;
    }

    const sesion = this.obtenerInformacionSesion();
    console.log(sesion);
    console.log(this.problemas);
    console.log(this.comentarios);
    this.sesionService.guardarSesion(sesion);
    
  }


}
