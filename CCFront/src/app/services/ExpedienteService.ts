import { Injectable } from "@angular/core";
import { DtoExpediente } from "../dtos/DtoExpediente";
import { HttpClient, HttpParams, ɵHttpInterceptorHandler } from "@angular/common/http";
import { Routes } from "./Routes";
import { SessionStorageNames } from "./sessionStorageNames";

@Injectable({
    providedIn: "root",
})
export class ExpedienteService {
    
    constructor(
        private httpClient: HttpClient
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

    obtenerExpedientePacientePorId(id: number) {
        this.httpClient.get<DtoExpediente>(Routes.expediente + 'paciente/' + id).subscribe( res => {
            this.guardarExpedienteEnSessionStorage(res);
        });
    }


}