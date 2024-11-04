import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  username= new FormControl('',Validators.required);

  // Validación para la contraseña: al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]);

  isPasswordLongEnough(): boolean {
    return (this.password.value ?? '').length >= 8;
  }  

  hasLowerCase(): boolean {
    return /[a-z]/.test(this.password.value || '');
  }

  hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password.value || '');
  }

  hasNumber(): boolean {
    return /\d/.test(this.password.value || '');
  }

  hasSpecialCharacter(): boolean {
    return /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?-]/.test(this.password.value || '');
  }

 

}
