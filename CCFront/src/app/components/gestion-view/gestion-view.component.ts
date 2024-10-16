import { Component } from '@angular/core';
import {TablaPacientesComponent} from "./tabla-pacientes/tabla-pacientes.component";
import {VentanaAtenderComponent} from "./ventana-atender/ventana-atender.component";
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/PacienteService';
import { DtoPaciente } from '../../dtos/DtoPaciente';

@Component({
  selector: 'app-gestion-view',
  standalone: true,
  imports: [CommonModule,VentanaAtenderComponent, TablaPacientesComponent],
  templateUrl: './gestion-view.component.html',
  styleUrl: './gestion-view.component.css'
})
export class GestionViewComponent {
  

  paciente: DtoPaciente | null = null;

  constructor(servicePaciente: PacienteService){
    //this.paciente = new DtoPaciente(1, "marcos zazueta", "soltero", "066", "local", "777");
    servicePaciente.setPaciente(this.paciente);
  }


}
