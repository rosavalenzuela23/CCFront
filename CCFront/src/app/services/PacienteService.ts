import { Injectable } from "@angular/core";
import { DtoPaciente } from "../dtos/DtoPaciente";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Routes } from "./Routes";
import { Router } from "@angular/router";
import { DtoPsicologo } from "../dtos/DtoPsicologo";
import { SessionStorageNames } from "./sessionStorageNames";
import { lastValueFrom } from "rxjs";


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

    async obtenerPacientesPsicologo() {

        const psicologo: DtoPsicologo = JSON.parse(
            sessionStorage.getItem(SessionStorageNames.USUARIO_ACTUAL) || "{}"
        );

        const pacientes = await lastValueFrom(this.http.get( Routes.paciente, {params: new HttpParams({fromObject: {id: psicologo.id}})}));
        sessionStorage.setItem(SessionStorageNames.PACIENTES_PSICOLOGO, JSON.stringify(pacientes));
        this.router.navigate(["gestion"])
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

    calcularEdadPaciente(fechaNacimiento: string): number{

        let edad: number = 0;

        const fechaActual = new Date();
        const fechaNac = new Date(fechaNacimiento);
        
        edad = fechaActual.getFullYear() - fechaNac.getFullYear();

        if (fechaActual.getMonth() < fechaNac.getMonth() || 
            (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())) {
            edad = edad - 1;
        }

        return edad;
    }

}