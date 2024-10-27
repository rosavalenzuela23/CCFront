import { Component, Inject, ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DtoFamiliaresConfianza } from '../../dtos/DtoFamiliaresConfianza';
import { DtoMedicamento } from '../../dtos/DtoMedicamento';
import { DtoIntegranteHogar } from '../../dtos/DtoIntegranteHogar';
import { CamposConTipo } from '../../tipos/camposConTipos';
import { DtoExpediente } from '../../dtos/DtoExpediente';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { DtoMedicamentoDelExpediente } from '../../dtos/DtoMedicamentoDelExpediente';
import { ExpedienteService } from '../../services/ExpedienteService';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PacienteService } from '../../services/PacienteService';
import { executeSchedule } from 'rxjs/internal/util/executeSchedule';

enum Acciones {
    CREAR = "Continuar con la cita",
    ACTUALIZAR = "Actualizar expediente"
}

@Component({
    selector: 'app-expediente-view',
    standalone: true,
    imports: [ReactiveFormsModule, TablaComponent],
    templateUrl: './expediente-view.component.html',
    styleUrl: './expediente-view.component.css'
})
export class ExpedienteViewComponent {

    formGroupExpediente = new FormGroup({
        nombrePacienteElement: new FormControl('', Validators.required),
        fechaNacimientoElement: new FormControl('', Validators.required),
        escolaridadElement: new FormControl('', Validators.required),
        diagnosticoElement: new FormControl('', Validators.required),
        telefonoElement: new FormControl('', Validators.required),
        telefonoEmergenciaElement: new FormControl('', Validators.required),
        estadoCivilElement: new FormControl('', Validators.required),
        motivoDeConsultaElement: new FormControl('', Validators.required),
        antecendentesElement: new FormControl('', Validators.required),
        enfermedadPreviaSesion: new FormControl('', Validators.required),
        logroDeseadoElement: new FormControl('', Validators.required),
        preguntaMagicaElement: new FormControl('', Validators.required),
        tipoViviendaElement: new FormControl('', Validators.required)
    });

    //Listas
    listaFamiliaresConfianza: DtoFamiliaresConfianza[] = [];
    listaMedicamentos: DtoMedicamentoDelExpediente[] = [];
    listaIntegrantesHogar: DtoIntegranteHogar[] = [];

    readonly atributosFamiliarDto: CamposConTipo[] = DtoFamiliaresConfianza.getFieldsWithType();
    readonly atributosIntegrantesHogar: CamposConTipo[] = DtoIntegranteHogar.getFieldsWithType();
    readonly atributosMedicamentos: CamposConTipo[] = DtoMedicamento.getFieldsWithType();


    accionActual: Acciones = Acciones.CREAR;

    private expediente?: DtoExpediente;
    private paciente?: DtoPaciente;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pacienteService: PacienteService,
        private expedienteService: ExpedienteService,
    ) {

    }

    ngOnInit() {
        this.route.params.forEach(param => {
            if (param['id'] != undefined) {
                this.accionActual = Acciones.ACTUALIZAR;
                this.configurarDatos();
            }
        })
    }

    private async configurarDatos() {

        this.paciente = this.pacienteService.getPacienteActual();
        this.expediente = this.expedienteService.obtenerExpedienteActual();

        this.nombrePaciente = this.paciente!.nombre;
        this.fechaNacimiento = this.paciente!.fecha;
        this.telefono = this.paciente!.telefono;
        this.telefonoEmergencia = this.paciente!.telefonoEmergencia;
        this.escolaridad = this.paciente!.escolaridad;
        this.tipoVivienda = this.paciente!.tipoVivienda;
        this.estadoCivil = this.paciente!.estadoCivil;

        // expediente
        this.listaIntegrantesHogar = this.expediente!.integranteHogar;
        this.listaFamiliaresConfianza = this.expediente!.familiaresConfianza;
        this.diagnostico = this.expediente!.diagnostico;
        this.motivoConsulta = this.expediente!.motivoConsulta;
        this.preguntaMagica = this.expediente!.preguntaMagica;
        this.logroDeseado = this.expediente!.deseo;
        this.antecendentes = this.expediente!.antecedentes;
        this.enfermedadPrevia = this.expediente!.enfermedadPrevia;

    }

    private mostrarMensajeDeError(mensaje: string[]): void {

    }

    private obtenerCampoInvalido(): string[] {

        return [];
    }

    private obtenerPaciente(): DtoPaciente {

        const paciente: DtoPaciente = {
            estadoCivil: this.estadoCivil,
            nombre: this.nombrePaciente,
            telefono: this.telefono,
            telefonoEmergencia: this.telefonoEmergencia,
            tipoVivienda: this.tipoVivienda,
            escolaridad: this.escolaridad,
            fecha: new Date(this.fechaNacimiento).toISOString(),
        }

        return paciente;
    }

    private obtenerExpediente(): DtoExpediente {

        const dtoExpediente: DtoExpediente = {
            antecedentes: this.antecendentes,
            enfermedadPrevia: this.enfermedadPrevia,
            familiaresConfianza: this.listaFamiliaresConfianza,
            integranteHogar: this.listaIntegrantesHogar,
            medicamentos: this.listaMedicamentos,
            preguntaMagica: this.preguntaMagica,
            motivoConsulta: this.motivoConsulta,
            diagnostico: this.diagnostico,
            deseo: this.logroDeseado
        }

        return dtoExpediente;

    }

    private async actualizarExpediente() {

        const expedienteActual = this.expedienteService.obtenerExpedienteActual();
        const pacienteActual = this.pacienteService.getPacienteActual();

        const obtenerPaciente = this.obtenerPaciente();
        obtenerPaciente.id = pacienteActual.id;

        const dtoExpediente = this.obtenerExpediente();
        dtoExpediente.id = expedienteActual!.id;

        await this.expedienteService.actualizarExpediente(dtoExpediente, obtenerPaciente);

        this.router.navigate(['gestion']);
    }

    decidirAccion() {
        if (this.accionActual === Acciones.ACTUALIZAR) {
            this.actualizarExpediente();
        } else if (this.accionActual === Acciones.CREAR) {
            this.crearExpediente();
        }
    }

    async crearExpediente() {

        if (this.formGroupExpediente.invalid) {
            this.obtenerCampoInvalido();
            return;
        }

        const paciente: DtoPaciente = {
            estadoCivil: this.estadoCivil,
            nombre: this.nombrePaciente,
            telefono: this.telefono,
            telefonoEmergencia: this.telefonoEmergencia,
            tipoVivienda: this.tipoVivienda,
            escolaridad: this.escolaridad,
            fecha: new Date(this.fechaNacimiento).toISOString(),
        }

        const dtoExpediente: DtoExpediente = {
            antecedentes: this.antecendentes,
            enfermedadPrevia: this.enfermedadPrevia,
            familiaresConfianza: this.listaFamiliaresConfianza,
            integranteHogar: this.listaIntegrantesHogar,
            medicamentos: this.listaMedicamentos,
            preguntaMagica: this.preguntaMagica,
            motivoConsulta: this.motivoConsulta,
            diagnostico: this.diagnostico,
            deseo: this.logroDeseado
        }



        const res = await this.expedienteService.guardarExpediente(dtoExpediente, paciente);

        this.router.navigate(['sesion']);

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

    get nombrePaciente() {
        return this.formGroupExpediente.get<string>('nombrePacienteElement')?.value || "";
    }

    get fechaNacimiento(): string {
        return this.formGroupExpediente.get('fechaNacimientoElement')?.value || "";
    }

    get escolaridad() {
        return this.formGroupExpediente.get('escolaridadElement')?.value || "";
    }

    get diagnostico() {
        return this.formGroupExpediente.get('diagnosticoElement')?.value || "";
    }

    get telefono() {
        return this.formGroupExpediente.get('telefonoElement')?.value || "";
    }

    get telefonoEmergencia() {
        return this.formGroupExpediente.get('telefonoEmergenciaElement')?.value || "";
    }

    get estadoCivil() {
        return this.formGroupExpediente.get('estadoCivilElement')?.value || "";
    }

    get motivoConsulta() {
        return this.formGroupExpediente.get('motivoDeConsultaElement')?.value || "";
    }

    get antecendentes() {
        return this.formGroupExpediente.get('antecendentesElement')?.value || "";
    }

    get enfermedadPrevia() {
        return this.formGroupExpediente.get('enfermedadPreviaSesion')?.value || "";
    }

    get logroDeseado() {
        return this.formGroupExpediente.get('logroDeseadoElement')?.value || "";
    }

    get preguntaMagica() {
        return this.formGroupExpediente.get('preguntaMagicaElement')?.value || "";
    }

    get tipoVivienda() {
        return this.formGroupExpediente.get('tipoViviendaElement')?.value || "";
    }

    set nombrePaciente(nombre: string) {
        this.formGroupExpediente.get<string>('nombrePacienteElement')?.setValue(nombre);
    }

    set fechaNacimiento(fecha: string) {
        this.formGroupExpediente.get('fechaNacimientoElement')?.setValue('2024-05-23T04:59:53-07:00');
    }

    set escolaridad(escolaridad: string) {
        this.formGroupExpediente.get('escolaridadElement')?.setValue(escolaridad);
    }

    set diagnostico(diagnostico: string) {
        this.formGroupExpediente.get('diagnosticoElement')?.setValue(diagnostico);
    }

    set telefono(telefono: string) {
        this.formGroupExpediente.get('telefonoElement')?.setValue(telefono);
    }

    set telefonoEmergencia(telefonoEmergencia: string) {
        this.formGroupExpediente.get('telefonoEmergenciaElement')?.setValue(telefonoEmergencia);
    }

    set estadoCivil(estadoCivil: string) {
        this.formGroupExpediente.get('estadoCivilElement')?.setValue(estadoCivil);
    }

    set motivoConsulta(motivoConsulta: string) {
        this.formGroupExpediente.get('motivoDeConsultaElement')?.setValue(motivoConsulta);
    }

    set antecendentes(antecendes: string) {
        this.formGroupExpediente.get('antecendentesElement')?.setValue(antecendes);
    }

    set enfermedadPrevia(enfermedadPrevia: string) {
        this.formGroupExpediente.get('enfermedadPreviaSesion')?.setValue(enfermedadPrevia);
    }

    set logroDeseado(logroDeseado: string) {
        this.formGroupExpediente.get('logroDeseadoElement')?.setValue(logroDeseado);
    }

    set preguntaMagica(preguntaMagica: string) {
        this.formGroupExpediente.get('preguntaMagicaElement')?.setValue(preguntaMagica);
    }

    set tipoVivienda(tipoVivienda: string) {
        this.formGroupExpediente.get('tipoViviendaElement')?.setValue(tipoVivienda);
    }

}



