import { Component, Input } from '@angular/core';
import { DtoFamiliaresConfianza } from '../../../dtos/DtoFamiliaresConfianza';
import { generate } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CamposConTipo } from '../../../tipos/camposConTipos';
import { noValidDate } from '../../../util/Validators';

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
    @Input() columnNames: CamposConTipo[] = [];
    @Input() informacionTabla: any[] = [];

    camposTexto!: FormGroup<any>;

    modal: bootstrap.Modal | null = null;

    ngOnInit() {

        const camposTextoGroup: any = {};

        this.columnNames.forEach(obj => {
            const listaValidadores = [];
            if(obj.tipo == 'date') {
                listaValidadores.push(noValidDate());
            }
            listaValidadores.push(Validators.required);
            camposTextoGroup[obj.name + this.tableName] = new FormControl('', listaValidadores);
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

        //validar

        if (this.camposTexto.invalid) {
            return;
        }


        const valoresCampos: any = this.camposTexto.value;
        const objToSave: any = {};
        objToSave.generatedId = this.informacionTabla.length + 1;

        this.columnNames.forEach(obj => {
            objToSave[obj.name] = valoresCampos[obj.name + this.tableName];
        })

        this.informacionTabla.push(objToSave);

        this.ocultarModal();
    }

}
