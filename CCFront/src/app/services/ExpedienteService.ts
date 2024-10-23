import { Injectable } from "@angular/core";
import { DtoExpediente } from "../dtos/DtoExpediente";
import { HttpClient, HttpParams, ɵHttpInterceptorHandler } from "@angular/common/http";
import { Routes } from "./Routes";
import { SessionStorageNames } from "./sessionStorageNames";
import {lastValueFrom} from "rxjs";
import { PsicologoService } from "./psicologo.service";
import { DtoRegistroExpedientePaciente } from "../dtos/DtoRegistroExpediente";
import { DtoPaciente } from "../dtos/DtoPaciente";

@Injectable({
    providedIn: "root",
})
export class ExpedienteService {
    
    constructor(
        private httpClient: HttpClient,
        private psicologoService: PsicologoService
    ){}

    private guardarExpedienteEnSessionStorage(expediente: DtoExpediente) {
        sessionStorage.setItem(
            SessionStorageNames.EXPEDIENTE_ACTUAL,
            JSON.stringify(expediente)
        );
    }

    obtenerExpedienteActual(): DtoExpediente | null {
        return JSON.parse(sessionStorage.getItem(SessionStorageNames.EXPEDIENTE_ACTUAL) || "{}");
    }

    async obtenerExpedientePacientePorId(id: number) {
        const res = await lastValueFrom(this.httpClient.get<DtoExpediente>(Routes.expediente + 'paciente/' + id));
        
        this.guardarExpedienteEnSessionStorage(res || {id:0, enfermedadPrevia:"", antecedentes:"", preguntaMagica:"", motivoConsulta:"", medicamentos:[],integrantesHogar:[],familiaresConfianza:[], instrumentos:[], paciente:null});   
    }

    async guardarExpediente(expediente: DtoExpediente, paciente: DtoPaciente): Promise<DtoExpediente> {

        const psicologo = this.psicologoService.getPsicologoActual();        

        const registro: DtoRegistroExpedientePaciente = {
            psicologo: psicologo,
            paciente: paciente,
            expediente: expediente
        }

        const res = await lastValueFrom(
            this.httpClient.post<DtoExpediente>(
                Routes.expediente+'registrar',
                registro
            )
        )

        return res;
    }


}