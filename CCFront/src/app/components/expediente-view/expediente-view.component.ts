import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expediente-view',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    listaFamiliaresConfianza = [];
    listaMedicamentos = [];
    listaIntegrantesHogar = [];

    constructor(
        //Servicios
    ) {}

    continuarConLaCita() {

 
        console.log(
            this.tipoViviendaElement.value
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



