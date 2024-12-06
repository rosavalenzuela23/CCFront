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

  formUser = new FormGroup({

    'username': new FormControl('', Validators.required),
    'password': new FormControl('', [Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ])
  });


  isPasswordLongEnough(): boolean {
    return (this.formUser.get('password')?.value ?? '').length >= 8;
  }

  hasLowerCase(): boolean {
    return /[a-z]/.test(this.formUser.get('password')?.value || '');
  }

  hasUpperCase(): boolean {
    return /[A-Z]/.test(this.formUser.get('password')?.value || '');
  }

  hasNumber(): boolean {
    return /\d/.test(this.formUser.get('password')?.value || '');
  }

  hasSpecialCharacter(): boolean {
    return /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?-]/.test(this.formUser.get('password')?.value || '');
  }
}
