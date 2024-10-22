import { DtoPaciente } from "./DtoPaciente";

export class DtoAccionPaciente{
    constructor(
        public accion: string,
        public paciente: DtoPaciente
        
       ) { }
}