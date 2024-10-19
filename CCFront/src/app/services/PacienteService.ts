import { Injectable } from "@angular/core";
import { DtoPaciente } from "../dtos/DtoPaciente";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Routes } from "./Routes";
import { Router } from "@angular/router";
import { DtoPsicologo } from "../dtos/DtoPsicologo";
import { SessionStorageNames } from "./sessionStorageNames";


@Injectable ({
    providedIn: "root",
    
})
export class PacienteService{
    
    paciente: DtoPaciente | null = null;

    constructor(
        private http: HttpClient,
        private router: Router
    ){

    }


    buscarPaciente(): void{
        //busqueda en base de datos
    }

    setPaciente(paciente: DtoPaciente | null):void{
        this.paciente = paciente;
    }

    getPaciente(): DtoPaciente | null {
        return this.paciente;
    }

    obtenerPacientesPsicologo() {

        const psicologo: DtoPsicologo = JSON.parse(
            sessionStorage.getItem(SessionStorageNames.USUARIO_ACTUAL) || "{}"
        );

        this.http.get( Routes.paciente, {params: new HttpParams({fromObject: {id: psicologo.id}})} ).subscribe( listaPacientes => {
            sessionStorage.setItem(
                SessionStorageNames.PACIENTES_PSICOLOGO, JSON.stringify(listaPacientes)
            );
            this.router.navigate(["gestion"])
        })

    }

    getPacientes(): DtoPaciente[] {

        const obj: DtoPaciente[] = JSON.parse(
            sessionStorage.getItem(SessionStorageNames.PACIENTES_PSICOLOGO) || '{}'
        )

        
        return obj;
    }

    getPacienteActual(): DtoPaciente {
        const expediente = JSON.parse(sessionStorage.getItem(
            SessionStorageNames.PACIENTE_ACTUAL) || "{}"
        );
        return expediente;
    }

    guardarPacienteEnSesion(paciente: DtoPaciente) {
        sessionStorage.setItem(
            SessionStorageNames.PACIENTE_ACTUAL,
            JSON.stringify(paciente)
        );
    }

}