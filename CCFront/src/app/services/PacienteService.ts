import { Injectable } from "@angular/core";
import { DtoPaciente } from "../dtos/DtoPaciente";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Routes } from "./Routes";
import { Router } from "@angular/router";
import { SesionViewComponent } from "../components/sesion-view/sesion-view.component";
import { DtoPsicologo } from "../dtos/DtoPsicologo";
import { DtoExpediente } from "../dtos/DtoExpediente";
import { JsonPipe } from "@angular/common";

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

        const psicologo: DtoPsicologo = JSON.parse(sessionStorage.getItem("psicologo") || "{}");

        console.log(psicologo);

        this.http.get( Routes.paciente, {params: new HttpParams({fromObject: {id: psicologo.id}})} ).subscribe( listaPacientes => {
            sessionStorage.setItem("pacientes", JSON.stringify(listaPacientes));
            this.router.navigate(["gestion"])
        })

    }

    getPacientes(): DtoPaciente[] {

        const obj: DtoPaciente[] = JSON.parse(
            sessionStorage.getItem('pacientes') || '{}'
        )

        
        return obj;
    }

    getPacienteActual(): DtoPaciente {
        const expediente = JSON.parse(sessionStorage.getItem('pacienteActual') || "{}");
        return expediente;
    }

}