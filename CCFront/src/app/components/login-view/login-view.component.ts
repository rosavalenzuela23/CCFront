import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ControlName, ControlNameValidator } from '../../util/control-name-validators';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';
import { catchError } from 'rxjs';


type errorType = {
    title: string,
    message: string,
    idComponente: string
}

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule, MensajeErrorComponent],
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  
    mensajeError!: string;


    //Lista de errores a mostrar en la vista
   errores: errorType[] = [];

    // Formulario reactivo
    loginForm = new FormGroup({
        userElement: new FormControl('', [Validators.required]), // Campo para el usuario
        passwordElement: new FormControl('', [Validators.required])  // Campo para la contraseña
    });

    constructor(private authService: AuthService) {}

    iniciarSesion() {

        if (this.loginForm.invalid) {
            this.validarCamposLogIn();
            return;
        }
        
        const usuario: string = this.loginForm.get('userElement')?.value || "";
        const password: string = this.loginForm.get('passwordElement')?.value || "";
           
        this.authService.logIn(usuario, password).catch((error: string)=>{
            this.mensajeError = error;

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

    // Valida todos los controles en el formulario principal, incluyendo FormArrays, FormGroups y FormControls
    private async validarCamposLogIn() {
    
        this.errores = [];
        const controles: string[] = Object.getOwnPropertyNames(this.loginForm.controls);
        for (const controlName of controles) {
            this.obtenerValidadores([controlName], this.loginForm);
        }

  }

}
