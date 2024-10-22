import { Component, Input} from '@angular/core';
import { DtoProblema } from '../../../../../dtos/DtoProblema';   


@Component({
    selector: 'problem-sesion-component',
    standalone: true,
    imports: [],
    templateUrl: './problem-sesion.component.html',
    styleUrl: './problem-sesion.component.css'
  })
  export class ProblemaSesionComponent {
  
    
    @Input() problema!: DtoProblema;

    


    constructor(){
      
    }
  
  
  }
  