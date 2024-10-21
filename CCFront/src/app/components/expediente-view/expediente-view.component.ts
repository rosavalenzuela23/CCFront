import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DtoFamiliaresConfianza } from '../../dtos/DtoFamiliaresConfianza';
import { DtoMedicamento } from '../../dtos/DtoMedicamento';
import { DtoIntegranteHogar } from '../../dtos/DtoIntegranteHogar';

@Component({
  selector: 'app-expediente-view',
  standalone: true,
  imports: [ReactiveFormsModule, TablaComponent],
  templateUrl: './expediente-view.component.html',
  styleUrl: './expediente-view.component.css'
})
export class ExpedienteViewComponent {
    nombrePacienteElement = new FormControl('');
    fechaNacimientoElement = new FormControl('');
    escolaridadElement = new FormControl('');
    diagnosticoElement = new FormControl('');
    telefonoElement = new FormControl('');
    telefonoEmergenciaElement = new FormControl('');
    estadoCivilElement = new FormControl('');
    motivoDeConsultaElement = new FormControl('');
    antecendentesElement = new FormControl('');
    enfermedadPreviaSesion = new FormControl('');
    logroDeseadoElement = new FormControl('');
    preguntaMagicaElement = new FormControl('');
    tipoViviendaElement = new FormControl('');

    //Listas
    listaFamiliaresConfianza: DtoFamiliaresConfianza[] = [];
    listaMedicamentos: DtoMedicamento[] = [];
    listaIntegrantesHogar: DtoIntegranteHogar[] = [];

    readonly atributosFamiliarDto: string[] = DtoFamiliaresConfianza.getProperties();
    readonly atributosIntegrantesHogar: string[] = DtoIntegranteHogar.getProperties();
    readonly atributosMedicamentos: string[] = DtoMedicamento.getProperties();

    constructor(
        //Servicios
    ) {}

    continuarConLaCita() {
        console.log(
            this.listaFamiliaresConfianza
        );
    }

    cancelar() {

    }

    agregarFamiliarConfianza() {

    }

    agregarIntegranteHogar() {

    }

    agregarMedicamento() {

    }

}



