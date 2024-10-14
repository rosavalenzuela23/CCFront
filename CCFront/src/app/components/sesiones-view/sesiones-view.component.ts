import { Component } from '@angular/core';
import {DetailSesionComponent}  from "./detail-sesion/detail-sesion.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sesiones-view',
  standalone: true,
  imports: [CommonModule, DetailSesionComponent],
  templateUrl: './sesiones-view.component.html',
  styleUrl: './sesiones-view.component.css'
})
export class SesionesViewComponent {

  iteraciones: number = 5;
}
