import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({
    alias: 'lista-pacientes'
  }) pacientes!: DtoPaciente[];

  @Output() nuevaConsultaEvent = new EventEmitter<DtoPaciente>();
  @Output() modificarExpedienteEvent = new EventEmitter<DtoPaciente>();
  @Output() verSesionesEvent = new EventEmitter<DtoPaciente>();

  constructor(
    public pacientesService: PacienteService
  ){
    // this.pacientes = pacientesService.getPacientes();
    
    // console.log(this.pacientes);
  }

  //presiona el botón "nueva sesión"
  nuevaSesion(paciente: DtoPaciente) {
    this.nuevaConsultaEvent.emit(paciente);
  }

  //presiona el botón "modificar"
  modificarExpediente(paciente: DtoPaciente){
    this.modificarExpedienteEvent.emit(paciente);
  }

  //presiona el botón "ver"
  verSesiones(paciente: DtoPaciente){
    this.verSesionesEvent.emit(paciente);
  }
  

}
