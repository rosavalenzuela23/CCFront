import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  
  mensajeError!: string;
  // Formulario reactivo
  loginForm = new FormGroup({
    username: new FormControl(''), // Campo para el usuario
    password: new FormControl('')  // Campo para la contraseña
  });

  constructor(private authService: AuthService) {}

  iniciarSesion() {
    if (this.loginForm.valid) {
      const usuario: string = this.loginForm.get('username')?.value || "";
      const password: string = this.loginForm.get('password')?.value || "";
      this.authService.logIn(usuario, password).catch((error: string)=>{
        console.log("si captura el errroooorr");
        this.mensajeError = error;

      })


    
    } else {
      console.log('El formulario no es válido.');
    }
  }
}
