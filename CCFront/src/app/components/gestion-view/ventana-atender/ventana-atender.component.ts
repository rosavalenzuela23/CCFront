import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from "@angular/router";
import {DtoPaciente} from "../../../dtos/DtoPaciente";
@Component({
  selector: 'ventana-atender-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ventana-atender.component.html',
  styleUrl: './ventana-atender.component.css'
})
export class VentanaAtenderComponent {

  //pacienteAtender: DtoPaciente;

  constructor(private router: Router){
    
  }

  verificarExistente(): void{
  
  }



}