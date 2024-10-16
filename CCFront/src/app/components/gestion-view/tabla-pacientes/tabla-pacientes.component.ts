import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../../services/PacienteService';
import { DtoExpediente } from '../../../dtos/DtoExpediente';

@Component({
  selector: 'tabla-pacientes-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-pacientes.component.html',
  styleUrl: './tabla-pacientes.component.css'
})
export class TablaPacientesComponent {

  id: number = 0;
  expedientes: DtoExpediente[];

  @Output() nuevaConsultaEvent = new EventEmitter<DtoExpediente>();

  constructor(
    private pacientesService: PacienteService
  ){
    this.expedientes = pacientesService.getPacientes();

    console.log(this.expedientes);

  }

  nuevaConsulta(expediente: DtoExpediente) {
    this.nuevaConsultaEvent.emit(expediente);
  }

}
