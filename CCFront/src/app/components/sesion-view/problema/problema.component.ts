import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtoProblema } from '../../../dtos/DtoProblema';


@Component({
  selector: 'problema-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './problema.component.html',
  styleUrl: './problema.component.css',
})
export class ProblemaComponent {


    @Input() problema!: FormGroup;



    ngOnInit() {
    
      
    }
}