import { Component, Inject, ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DtoFamiliaresConfianza } from '../../dtos/DtoFamiliaresConfianza';
import { DtoMedicamento } from '../../dtos/DtoMedicamento';
import { DtoIntegranteHogar } from '../../dtos/DtoIntegranteHogar';
import { CamposConTipo } from '../../tipos/camposConTipos';
import { DtoExpediente } from '../../dtos/DtoExpediente';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { DtoMedicamentoDelExpediente } from '../../dtos/DtoMedicamentoDelExpediente';
import { ExpedienteService } from '../../services/ExpedienteService';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PacienteService } from '../../services/PacienteService';
import { executeSchedule } from 'rxjs/internal/util/executeSchedule';
import { forbiddenString, noValidDate } from '../../util/Validators';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';
import { ControlName, ControlNameValidator } from '../../util/control-name-validators';
import { getOnlyDate } from '../../util/util-functions';

enum Acciones {
    CREAR = "Continuar con la cita",
    ACTUALIZAR = "Actualizar expediente"
}

type errorType = {
    title: string,
    message: string,
    idComponente: string
}

@Component({
    selector: 'app-expediente-view',
    standalone: true,
    imports: [ReactiveFormsModule, TablaComponent, MensajeErrorComponent, RouterLink],
    templateUrl: './expediente-view.component.html',
    styleUrl: './expediente-view.component.css'
})
export class ExpedienteViewComponent {

    formGroupExpediente = new FormGroup({
        nombrePacienteElement: new FormControl('', Validators.required),
        fechaNacimientoElement: new FormControl('', [Validators.required, noValidDate()]),
        escolaridadElement: new FormControl('', Validators.required),
        diagnosticoElement: new FormControl(''),
        telefonoElement: new FormControl('', [Validators.required, forbiddenString(/\+[0-9]{12}/gm)]),
        telefonoEmergenciaElement: new FormControl('', [Validators.required, forbiddenString(/\+[0-9]{12}/gm)]),
        estadoCivilElement: new FormControl('', Validators.required),
        motivoDeConsultaElement: new FormControl('', Validators.required),
        medicamentosElement: new FormControl(''),
        antecendentesElement: new FormControl('', Validators.required),
        enfermedadPreviaSesion: new FormControl(''),
        logroDeseadoElement: new FormControl('', Validators.required),
        preguntaMagicaElement: new FormControl('', Validators.required),
        tipoViviendaElement: new FormControl('', Validators.required)
    });

    //Listas
    listaFamiliaresConfianza: DtoFamiliaresConfianza[] = [];
    listaIntegrantesHogar: DtoIntegranteHogar[] = [];

    readonly atributosFamiliarDto: CamposConTipo[] = DtoFamiliaresConfianza.getFieldsWithType();
    readonly atributosIntegrantesHogar: CamposConTipo[] = DtoIntegranteHogar.getFieldsWithType();
    


    accionActual: Acciones = Acciones.CREAR;

    private expediente?: DtoExpediente;
    private paciente?: DtoPaciente;

    errores: errorType[] = [];

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

        const pacienteDto = this.pacienteService.getPacienteActual();

        // lo regresa a la pagina de gestion si es que no hay ningun paciente actual
        if (pacienteDto == null) {
            this.router.navigate(['**']);
            return;
        }

        this.paciente = pacienteDto;

        this.expediente = this.expedienteService.obtenerExpedienteActual();

        //Paciente
        this.nombrePaciente = this.paciente!.nombre;
        this.fechaNacimiento = getOnlyDate(this.paciente!.fecha);
        this.telefono = this.paciente!.telefono;
        this.telefonoEmergencia = this.paciente!.telefonoEmergencia;
        this.escolaridad = this.paciente!.escolaridad;
        this.tipoVivienda = this.paciente!.tipoVivienda;
        this.estadoCivil = this.paciente!.estadoCivil;

        // expediente
        this.listaIntegrantesHogar = this.expediente!.integranteHogar;
        this.listaFamiliaresConfianza = this.expediente!.familiaresConfianza;
        this.diagnostico = this.expediente!.diagnostico || "";
        this.motivoConsulta = this.expediente!.motivoConsulta;
        this.preguntaMagica = this.expediente!.preguntaMagica;
        this.logroDeseado = this.expediente!.deseo;
        this.antecendentes = this.expediente!.antecedentes;
        this.enfermedadPrevia = this.expediente!.enfermedadPrevia;
        this.medicamentos = this.expediente!.medicamentos;

    }

    private async obtenerCampoInvalido() {

        this.errores = [];

        const controles: string[] = Object.getOwnPropertyNames(this.formGroupExpediente.controls);

        for (const controlName of controles) {

            const formControl = this.formGroupExpediente.get(controlName);
            const validators: string[] = Object.getOwnPropertyNames(formControl?.errors || {})
            
            for (const validator of validators) {

                this.errores.push({
                    idComponente: `${controlName}+${validator}+${String(Symbol(Date.now()))}`,
                    message: `${ControlName[controlName]} no cumplio: ${ControlNameValidator[validator]}`,
                    title: `Error en el campo ${ControlName[controlName]}`
                })

            }

        }

    }

    private obtenerPaciente(): DtoPaciente {

        //por un errorsito que no sabemos como solucionar tenemos
        //que sumarle uno a la fecha......
        
        const dateOffset = 1; //un dia

        const date = new Date(this.fechaNacimiento)
        date.setDate(date.getDate() + dateOffset);

        const paciente: DtoPaciente = {
            estadoCivil: this.estadoCivil,
            nombre: this.nombrePaciente,
            telefono: this.telefono,
            telefonoEmergencia: this.telefonoEmergencia,
            tipoVivienda: this.tipoVivienda,
            escolaridad: this.escolaridad,
            fecha: date.toISOString()
        }

        return paciente;
    }

    private obtenerExpediente(): DtoExpediente {

        const dtoExpediente: DtoExpediente = {
            antecedentes: this.antecendentes,
            enfermedadPrevia: this.enfermedadPrevia,
            familiaresConfianza: this.listaFamiliaresConfianza,
            integranteHogar: this.listaIntegrantesHogar,
            preguntaMagica: this.preguntaMagica,
            motivoConsulta: this.motivoConsulta,
            medicamentos: this.medicamentos,
            diagnostico: this.diagnostico,
            deseo: this.logroDeseado
        }

        return dtoExpediente;

    }

    private async actualizarExpediente() {
        const pacienteDto = this.pacienteService.getPacienteActual();

        if (pacienteDto == null) {
            return;
        }
        
        const pacienteActual = pacienteDto;

        const expedienteActual = this.expedienteService.obtenerExpedienteActual();

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

        const paciente: DtoPaciente = this.obtenerPaciente();

        const dtoExpediente: DtoExpediente = this.obtenerExpediente();

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

    get nombrePaciente() {
        return this.formGroupExpediente.get<string>('nombrePacienteElement')?.value || "";
    }

    get fechaNacimiento(): string {
        return this.formGroupExpediente.get('fechaNacimientoElement')?.value || "";
    }

    get escolaridad() {
        return this.formGroupExpediente.get('escolaridadElement')?.value || "";
    }

    get diagnostico(): string | undefined {

        if (this.formGroupExpediente.get('diagnosticoElement')?.value?.trim().length == 0) {
            return undefined;
        }

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

    get enfermedadPrevia(): string | undefined {
        return this.formGroupExpediente.get('enfermedadPreviaSesion')?.value || undefined;
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

    get medicamentos() {
       return this.formGroupExpediente.get('medicamentosElement')?.value || "";
    }

    set nombrePaciente(nombre: string) {
        this.formGroupExpediente.get<string>('nombrePacienteElement')?.setValue(nombre);
    }

    set fechaNacimiento(fecha: string) {
        this.formGroupExpediente.get('fechaNacimientoElement')?.setValue(fecha);
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

    set enfermedadPrevia(enfermedadPrevia: string | undefined) {
        this.formGroupExpediente.get('enfermedadPreviaSesion')?.setValue(enfermedadPrevia || "");
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

    set medicamentos(medicamentos: string) {
        this.formGroupExpediente.get('medicamentosElement')?.setValue(medicamentos);
    }
}



