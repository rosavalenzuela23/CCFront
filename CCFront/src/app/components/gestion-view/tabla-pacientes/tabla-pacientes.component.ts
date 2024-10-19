import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../../services/PacienteService';
import { DtoPaciente } from '../../../dtos/DtoPaciente';

@Component({
  selector: 'tabla-pacientes-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-pacientes.component.html',
  styleUrl: './tabla-pacientes.component.css'
})
export class TablaPacientesComponent {

  id: number = 0;
  pacientes: DtoPaciente[];

  @Output() nuevaConsultaEvent = new EventEmitter<DtoPaciente>();

  constructor(
    private pacientesService: PacienteService
  ){
    this.pacientes = pacientesService.getPacientes();
    console.log(this.pacientes);
  }

  nuevaConsulta(paciente: DtoPaciente) {
    this.nuevaConsultaEvent.emit(paciente);
  }

}
