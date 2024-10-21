import { Component, Input } from '@angular/core';
import { DtoFamiliaresConfianza } from '../../../dtos/DtoFamiliaresConfianza';
import { generate } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type rowWithGeneratedId = {
  generatedId: number
}

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  @Input() tableName = 'NO_TITLE';
  @Input() tableNameSpaces = "NO TITLE";
  @Input() columnNames: string[] = [];
  @Input() informacionTabla: any[] = [];

  camposTexto!: FormGroup<string>;

  modal: bootstrap.Modal | null = null;

  ngOnInit() {

    const camposTextoGroup: any = {};

    this.columnNames.forEach(name => {
      camposTextoGroup[name+this.tableName] = new FormControl('');
    });


    this.camposTexto = new FormGroup(camposTextoGroup);
  }

  mostrarModal() {
    if (this.modal === null) {
      this.modal = new bootstrap.Modal(
        document.getElementById(this.tableName) as HTMLElement
      );
    }
    this.modal.show();
  }

  ocultarModal() {
    this.modal!.hide();
    this.camposTexto.reset();
  }

  guardarInformacion() {
    
      const valoresCampos: any = this.camposTexto.value;
      const objToSave: any = {};
      objToSave.generatedId = this.informacionTabla.length + 1;

      this.columnNames.forEach(columnName => {
        objToSave[columnName] = valoresCampos[columnName+this.tableName];
      })

      this.informacionTabla.push(objToSave);
      
      this.ocultarModal();
  }


}
