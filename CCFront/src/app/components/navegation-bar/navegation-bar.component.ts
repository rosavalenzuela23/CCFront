import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PacienteService } from '../../services/PacienteService';
import { AuthService } from './../../services/auth.service';
import { StompserviceService } from '../../services/stompservice.service';
import { SessionStorageNames } from '../../services/sessionStorageNames';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navegation-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navegation-bar.component.html',
  styleUrl: './navegation-bar.component.css'
})
export class NavegationBarComponent {

  

  constructor(
    private pacienteService: PacienteService,
    private authService: AuthService,
    private stomp: StompserviceService
  ){}

  buscarExpedientes() {
    
    this.pacienteService.obtenerPacientesPsicologo();

  }

  tienePermisos(permisoRequerido: string): boolean {
    const token = sessionStorage.getItem(SessionStorageNames.TOKEN);
    if (token == null) {
      return false;
    }
    return token === permisoRequerido;
  }

  logOut(){
    this.stomp.desconectar();
    this.authService.logOut();
  }

}
