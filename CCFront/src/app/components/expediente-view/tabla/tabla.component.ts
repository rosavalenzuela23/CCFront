import { Component, Input } from '@angular/core';
import { DtoFamiliaresConfianza } from '../../../dtos/DtoFamiliaresConfianza';
import { generate } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CamposConTipo } from '../../../tipos/camposConTipos';
import { forbiddenString, noValidDate } from '../../../util/Validators';
import { ControlNameValidator } from '../../../util/control-name-validators';

type Error = { 
    name: string,
    type: string
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

    listaErrores: Error[] = [];

    camposTexto!: FormGroup<any>;

    modal: bootstrap.Modal | null = null;

    ngOnInit() {

        const camposTextoGroup: any = {};

        this.columnNames.forEach(obj => {
            const listaValidadores = [];
            if(obj.tipo == 'date') {
                listaValidadores.push(noValidDate());
            }

            if(obj.tipo == 'tel') {
                listaValidadores.push(forbiddenString(/\+[0-9]{12}/gm))
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
        this.listaErrores = [];
        this.camposTexto.reset();
    }

    getAllErrors() {
        this.listaErrores = [];
        const controls = Object.getOwnPropertyNames(this.camposTexto.controls);

        for(const controlName of controls) { 
            const formControl = this.camposTexto.get(controlName);
            const validators: string[] = Object.getOwnPropertyNames(formControl?.errors || {})
            
            for (const validator of validators) {
                this.listaErrores.push({
                    name: `${controlName}`,
                    type: `${ControlNameValidator[validator]}`
                })
            }
        }

    }

    guardarInformacion() {

        //validar

        if (this.camposTexto.invalid) {
            this.getAllErrors();
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

    hasError(formControlName: string, error: string): boolean { 
        const control = this.camposTexto.get(formControlName)!
        return control.hasError(error) && control.touched
    }

}
