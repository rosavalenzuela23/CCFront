import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {EmpleadoService } from './../../../services/empleado.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlName, ControlNameValidator } from '../../../util/control-name-validators';
import { MensajeErrorComponent } from '../../mensaje-error/mensaje-error.component';
import { DtoEmpleado } from '../../../dtos/DtoEmpleado';

type errorType = {
    title: string,
    message: string,
    idComponente: string
}


@Component({
  selector: 'actualizar-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MensajeErrorComponent],
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent {

    //Boolean para decidir si mostrar mensaje de usuario creado correctamente
    isCreado: boolean = false;

    //Lista de errores a mostrar en la vista
   errores: errorType[] = [];


   //Recibe los datos del empleado para actualizar
   empleado?: DtoEmpleado;

    //Formgroup para actualizar un empleado
    actualizarEmpleadoForm: FormGroup = new FormGroup({

        userElement: new FormControl('', [Validators.required]),
        passwordElement: new FormControl('', [Validators.required]),
        puestoElement: new FormControl('', [Validators.required]),
    })


    constructor(private router: Router, private empleadoService: EmpleadoService ) { }

    ngOnInit() {

        this.empleado = history.state.empleado;
        console.log("si recibio el empleado");
        console.log(this.empleado);

        this.actualizarEmpleadoForm.patchValue({
            userElement: this.empleado?.usuario,
            puestoElement: this.empleado?.token 
        });
    }
    
    //Método que llama al servicio para actualizar un empleado y obtiene una promesa para mostrar mensaje de exito
    actualizarEmpleado(){
        console.log("actualizando empleado");
        if(this.actualizarEmpleadoForm.invalid){
            this.validarCamposActualizarUsuario();
            return;
        }

         
        if (this.empleado) {
            this.empleado.usuario = this.actualizarEmpleadoForm.get('userElement')?.value;
            this.empleado.password = this.actualizarEmpleadoForm.get('passwordElement')?.value;
            this.empleado.token = this.actualizarEmpleadoForm.get('puestoElement')?.value;
            this.empleadoService.actualizarEmpleado(this.empleado).then(() => {
                this.isCreado = true;

                setTimeout(()=>{
                    this.router.navigate(['/usuarios']);
                }, 1000);
            });
            
        } 
    
    
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

    // Valida todos los controles en el formulario principal
    private async validarCamposActualizarUsuario() {
    
        this.errores = [];
        const controles: string[] = Object.getOwnPropertyNames(this.actualizarEmpleadoForm.controls);
        for (const controlName of controles) {
            this.obtenerValidadores([controlName], this.actualizarEmpleadoForm);
        }

    }


}