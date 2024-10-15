import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'ventana-atender-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ventana-atender.component.html',
  styleUrl: './ventana-atender.component.css'
})
export class VentanaAtenderComponent {
    nombre: String = 'nuevo';
}