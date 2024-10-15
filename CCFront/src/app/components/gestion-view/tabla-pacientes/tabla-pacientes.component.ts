import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tabla-pacientes-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-pacientes.component.html',
  styleUrl: './tabla-pacientes.component.css'
})
export class TablaPacientesComponent {

  id: number = 0;


}
