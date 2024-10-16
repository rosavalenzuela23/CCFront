import { Injectable } from "@angular/core";
import { DtoPaciente } from "../dtos/DtoPaciente";

@Injectable ({
    providedIn: "root"
})
export class PacienteService{
    
    paciente: DtoPaciente | null = null;

    constructor(/*ingresar dependencia a base de datos*/){

    }


    buscarPaciente(): void{
        //busqueda en base de datos
    }

    setPaciente(paciente: DtoPaciente | null):void{
        this.paciente = paciente;
    }

    getPaciente(): DtoPaciente | null{
        return this.paciente;
    }

}