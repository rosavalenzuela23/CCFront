import { Component, Input } from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtoComentarioSesion } from '../../../dtos/DtoComentarioSesion';


@Component({
  selector: 'comentario-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {

    @Input() comentario!: FormGroup;
   
}