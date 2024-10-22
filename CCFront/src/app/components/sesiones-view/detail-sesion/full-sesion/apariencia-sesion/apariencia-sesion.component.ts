import { Component, Input} from '@angular/core';
import { DtoSesion } from '../../../../../dtos/DtoSesion';
import { NgFor } from '@angular/common';

@Component({
    selector: 'apariencia-sesion-component',
    standalone: true,
    imports: [NgFor],
    templateUrl: './apariencia-sesion.component.html',
    styleUrl: './apariencia-sesion.component.css'
  })
  export class AparienciaSesionComponent {
  
    //La sesión actual que estamos mostrando
    @Input() sesion: DtoSesion | null = null;

  
  
  }
  