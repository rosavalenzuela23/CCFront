import { Injectable } from "@angular/core";
import { DtoExpediente } from "../dtos/DtoExpediente";
import { HttpClient, HttpParams, ɵHttpInterceptorHandler } from "@angular/common/http";
import { Routes } from "./Routes";
import { SessionStorageNames } from "./sessionStorageNames";
import {lastValueFrom} from "rxjs";
import { PsicologoService } from "./psicologo.service";
import { DtoRegistroExpedientePaciente } from "../dtos/DtoRegistroExpediente";
import { DtoPaciente } from "../dtos/DtoPaciente";
import { DatePipe } from "@angular/common";
import { RouterEvent } from "@angular/router";
import { PutPacienteExpediente } from "../dtos/PutPacienteExpediente";

@Injectable({
    providedIn: "root",
})
export class ExpedienteService {
    
    constructor(
        private httpClient: HttpClient,
        private psicologoService: PsicologoService
    ){}

    async actualizarExpediente(dtoExpediente: DtoExpediente, dtoPaciente: DtoPaciente) {

        const res = await lastValueFrom(
            this.httpClient.put<PutPacienteExpediente>(Routes.expediente+"actualizar", {
                expediente: dtoExpediente,
                paciente: dtoPaciente
            })
        );

        return res;
    }

    private guardarExpedienteEnSessionStorage(expediente: DtoExpediente) {
        sessionStorage.setItem(
            SessionStorageNames.EXPEDIENTE_ACTUAL,
            JSON.stringify(expediente)
        );
    }

    obtenerExpedienteActual(): DtoExpediente {
        return JSON.parse(sessionStorage.getItem(SessionStorageNames.EXPEDIENTE_ACTUAL) || "{}");
    }

    async obtenerExpedientePacientePorId(id: number) {
        const res = await lastValueFrom(this.httpClient.get<DtoExpediente>(Routes.expediente + 'paciente/' + id));
        this.guardarExpedienteEnSessionStorage(res);   
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

        this.guardarExpedienteEnSessionStorage(res);
        return res;
    }


}