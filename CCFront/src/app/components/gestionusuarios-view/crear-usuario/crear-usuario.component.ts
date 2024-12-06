import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {EmpleadoService } from './../../../services/empleado.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlName, ControlNameValidator } from '../../../util/control-name-validators';
import { MensajeErrorComponent } from '../../mensaje-error/mensaje-error.component';

type errorType = {
    title: string,
    message: string,
    idComponente: string
}


@Component({
  selector: 'crear-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MensajeErrorComponent],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

    //Boolean para decidir si mostrar mensaje de usuario creado correctamente
    isCreado: boolean = false;

    //Lista de errores a mostrar en la vista
   errores: errorType[] = [];

    //Formgroup para crear un empleado
    crearEmpleadoForm: FormGroup = new FormGroup({

        userElement: new FormControl('', [Validators.required]),
        passwordElement: new FormControl('', [Validators.required]),
        puestoElement: new FormControl('', [Validators.required]),
    })


    constructor(private router: Router, private empleadoService: EmpleadoService ) { }

    //Utiliza el servicio de empleadoService para persistir un empleado en la base de datos
    //Regresa un mensaje de exito y te reedirige a la página de gestión de usuarios
    crearEmpleado(){
  
        
        if (this.crearEmpleadoForm.invalid) {
            this.validarCamposRegistrarUsuario();
            return;
        }

        const usuario = this.crearEmpleadoForm.get('userElement')?.value;
        const password = this.crearEmpleadoForm.get('passwordElement')?.value;
        const rol = this.crearEmpleadoForm.get('puestoElement')?.value;
        this.empleadoService.registrarEmpleado(usuario, password, rol).then(() => {
            this.isCreado = true;
            console.log("Empleado creado correctamente");
            setTimeout(()=>{
                this.router.navigate(["/usuarios"]);
            }, 1000)
            
        })
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
    private async validarCamposRegistrarUsuario() {
    
        this.errores = [];
        const controles: string[] = Object.getOwnPropertyNames(this.crearEmpleadoForm.controls);
        for (const controlName of controles) {
            this.obtenerValidadores([controlName], this.crearEmpleadoForm);
        }

  }


}