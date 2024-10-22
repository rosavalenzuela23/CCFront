import { Component, Input} from '@angular/core';
import { DtoComentarioSesion } from '../../../../../dtos/DtoComentarioSesion';   


@Component({
    selector: 'comentario-sesion-component',
    standalone: true,
    imports: [],
    templateUrl: './comentario-sesion.component.html',
    styleUrl: './comentario-sesion.component.css'
  })
  export class ComentarioSesionComponent {
  
    
    @Input() comentario!: DtoComentarioSesion;

    


    constructor(){
      
    }
  
  
  }
  