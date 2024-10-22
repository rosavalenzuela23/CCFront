import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import {DetailSesionComponent}  from "./detail-sesion/detail-sesion.component";
import { CommonModule } from '@angular/common';
import { DtoSesion } from '../../dtos/DtoSesion';
import { SesionService } from '../../services/sesion.service';


@Component({
  selector: 'app-sesiones-view',
  standalone: true,
  imports: [CommonModule, DetailSesionComponent, RouterOutlet],
  templateUrl: './sesiones-view.component.html',
  styleUrl: './sesiones-view.component.css'
})
export class SesionesViewComponent {

  sesiones: DtoSesion[] =[];

  constructor(private sesionService: SesionService){

    
  }

  ngOnInit(): void{
    this.obtenerSesiones();
    
  }

  async obtenerSesiones(){

    const sesiones = await this.sesionService.getSesionesExpedientePorId();
    this.sesiones = sesiones;

  }
}