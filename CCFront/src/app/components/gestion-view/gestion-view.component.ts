import { Component } from '@angular/core';
import {TablaPacientesComponent} from "./tabla-pacientes/tabla-pacientes.component";

@Component({
  selector: 'app-gestion-view',
  standalone: true,
  imports: [TablaPacientesComponent],
  templateUrl: './gestion-view.component.html',
  styleUrl: './gestion-view.component.css'
})
export class GestionViewComponent {

}
