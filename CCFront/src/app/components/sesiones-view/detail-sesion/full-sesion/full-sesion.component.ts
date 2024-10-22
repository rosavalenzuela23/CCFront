import { Component} from '@angular/core';
import { DtoSesion } from '../../../../dtos/DtoSesion';
import { SesionService } from '../../../../services/sesion.service';
import {ProblemaSesionComponent} from './problem-sesion/problem-sesion.component';
import {ComentarioSesionComponent}  from './comentario-sesion/comentario-sesion.component';
import {AparienciaSesionComponent}  from './apariencia-sesion/apariencia-sesion.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'full-sesion-component',
    standalone: true,
    imports: [ProblemaSesionComponent, ComentarioSesionComponent, AparienciaSesionComponent,NgFor],
    templateUrl: './full-sesion.component.html',
    styleUrl: './full-sesion.component.css'
  })
  export class FullSesionComponent {
  
    //La sesión actual que estamos mostrando
    sesion: DtoSesion | null;

    


    constructor(private sesionService: SesionService){
      this.sesion = sesionService.obtenerExpedienteActual();
    }
  
  
  }
  