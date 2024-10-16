import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PacienteService } from '../../services/PacienteService';

@Component({
  selector: 'app-navegation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegation-bar.component.html',
  styleUrl: './navegation-bar.component.css'
})
export class NavegationBarComponent {

  constructor(
    private pacienteService: PacienteService
  ){}

  buscarExpedientes() {
    
    this.pacienteService.obtenerPacientesPsicologo();

  }

}
