import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from "@angular/router";
import {DtoPaciente} from "../../../dtos/DtoPaciente";
import {PacienteService} from "../../../services/PacienteService";

@Component({
  selector: 'ventana-atender-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ventana-atender.component.html',
  styleUrl: './ventana-atender.component.css'
})
export class VentanaAtenderComponent {

  pacienteAtender: DtoPaciente | null = null;
  @Output() nuevaCita = new EventEmitter<DtoPaciente>();

  constructor(private router: Router, servicePaciente:PacienteService){
    this.pacienteAtender = servicePaciente.getPaciente();
  }

  verificarExistente(): void{

    if(this.pacienteAtender == null){
      this.router.navigate(['/expediente']);
    }else{
      this.nuevaCita.emit(this.pacienteAtender);
    }

  }

  obtenerNombrePaciente() {
    return this.pacienteAtender?.nombre || "Nuevo";
  }

}