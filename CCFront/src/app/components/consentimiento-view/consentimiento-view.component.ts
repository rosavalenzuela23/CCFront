import { Component } from '@angular/core';
import { CartaPacienteComponent } from './carta-paciente/carta-paciente.component';

@Component({
  selector: 'app-consentimiento-view',
  standalone: true,
  imports: [CartaPacienteComponent],
  templateUrl: './consentimiento-view.component.html',
  styleUrl: './consentimiento-view.component.css'
})
export class ConsentimientoViewComponent {

}
