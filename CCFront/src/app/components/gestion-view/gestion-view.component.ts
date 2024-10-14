import { Component } from '@angular/core';
import {TablaPacientesComponent} from "./tabla-pacientes/tabla-pacientes.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-view',
  standalone: true,
  imports: [CommonModule,TablaPacientesComponent],
  templateUrl: './gestion-view.component.html',
  styleUrl: './gestion-view.component.css'
})
export class GestionViewComponent {

}
