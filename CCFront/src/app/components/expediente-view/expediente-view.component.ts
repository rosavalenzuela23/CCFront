import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DtoFamiliaresConfianza } from '../../dtos/DtoFamiliaresConfianza';
import { DtoMedicamento } from '../../dtos/DtoMedicamento';
import { DtoIntegranteHogar } from '../../dtos/DtoIntegranteHogar';
import { CamposConTipo } from '../../tipos/camposConTipos';
import { DtoExpediente } from '../../dtos/DtoExpediente';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { DtoMedicamentoDelExpediente } from '../../dtos/DtoMedicamentoDelExpediente';
import { ExpedienteService } from '../../services/ExpedienteService';

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
    listaMedicamentos: DtoMedicamentoDelExpediente[] = [];
    listaIntegrantesHogar: DtoIntegranteHogar[] = [];

    readonly atributosFamiliarDto: CamposConTipo[] = DtoFamiliaresConfianza.getFieldsWithType();
    readonly atributosIntegrantesHogar: CamposConTipo[] = DtoIntegranteHogar.getFieldsWithType();
    readonly atributosMedicamentos: CamposConTipo[] = DtoMedicamento.getFieldsWithType();

    constructor(
        public servicioExpediente: ExpedienteService
    ) {}

    async crearExpediente() {
    
        const paciente: DtoPaciente = {
            estadoCivil: this.estadoCivilElement.value || 'NA',
            fecha: this.fechaNacimientoElement.value || 'NA',
            nombre: this.nombrePacienteElement.value || 'NA',
            telefono: this.telefonoElement.value || 'NA',
            telefonoEmergencia: this.telefonoEmergenciaElement.value || 'NA',
            vivienda: this.tipoViviendaElement.value || 'NA'
        }

        const dtoExpediente: DtoExpediente = {
            antecedentes: this.antecendentesElement.value || 'NA',
            enfermedadPrevia: this.enfermedadPreviaSesion.value || 'NA',
            familiaresConfianza: this.listaFamiliaresConfianza,
            integrantesHogar: this.listaIntegrantesHogar,
            medicamentos: this.listaMedicamentos,
            preguntaMagica: this.preguntaMagicaElement.value || 'NA',
            motivoConsulta: this.motivoDeConsultaElement.value || 'NA'
        }

        const res = await this.servicioExpediente.guardarExpediente(dtoExpediente, paciente);

        console.log(res);

    }

    continuarConLaCita() {
        
        this.crearExpediente();

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



