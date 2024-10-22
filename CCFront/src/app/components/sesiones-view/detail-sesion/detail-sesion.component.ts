import { Component, Input } from '@angular/core';
import { DtoSesion } from '../../../dtos/DtoSesion';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'detail-sesion-component',
  standalone: true,
  imports: [],
  templateUrl: './detail-sesion.component.html',
  styleUrl: './detail-sesion.component.css'
})
export class DetailSesionComponent {

  @Input() sesion!: DtoSesion;
  

  constructor(private sesionService: SesionService, private router: Router){
    
  }

  //redirección hacía la vista de mirar la sesión completa
  verSesionCompleta(){
    
    this.sesionService.guardarSesionEnSessionStorage(this.sesion);
    this.router.navigate(["sesioncompleta"]);
  }


}
