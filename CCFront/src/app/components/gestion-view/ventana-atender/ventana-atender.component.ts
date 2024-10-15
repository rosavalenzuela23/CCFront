import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ventana-atender-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventana-atender.component.html',
  styleUrl: './ventana-atender.component.css'
})
export class VentanaAtenderComponent {
    nombre: String = 'nuevo';
}