import { Component } from '@angular/core';
import {TablaPacientesComponent} from "./tabla-pacientes/tabla-pacientes.component";
import {VentanaAtenderComponent} from "./ventana-atender/ventana-atender.component";
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/PacienteService';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { DtoEmpleado } from '../../dtos/DtoEmpleado';
import { DtoExpediente } from '../../dtos/DtoExpediente';
import { Router } from '@angular/router';
import { ExpedienteService } from '../../services/ExpedienteService';


@Component({
  selector: 'app-gestion-view',
  standalone: true,
  imports: [CommonModule,VentanaAtenderComponent, TablaPacientesComponent],
  templateUrl: './gestion-view.component.html',
  styleUrl: './gestion-view.component.css'
})
export class GestionViewComponent {
  

  paciente: DtoPaciente | null = null;

  constructor(
    private servicePaciente: PacienteService,
    private router: Router,
    private expedienteService: ExpedienteService
  ){
    //this.paciente = new DtoPaciente(1, "marcos zazueta", "soltero", "066", "local", "777");
    servicePaciente.setPaciente(this.paciente);
  }

  async nuevaConsulta(paciente: DtoPaciente) {
    
    this.servicePaciente.guardarPacienteEnSesion(paciente);
    await this.expedienteService.obtenerExpedientePacientePorId(paciente.id!);
    this.router.navigate(["sesion"]);
  
  }

  async modificarExpediente(paciente: DtoPaciente){
    this.servicePaciente.guardarPacienteEnSesion(paciente);
    await this.expedienteService.obtenerExpedientePacientePorId(paciente.id!);
    //this.router.navigate(["modificar"]);
  }

  async verSesiones(paciente: DtoPaciente){

    this.servicePaciente.guardarPacienteEnSesion(paciente);
    await this.expedienteService.obtenerExpedientePacientePorId(paciente.id!);
    this.router.navigate(["sesiones"]);
  }


}
