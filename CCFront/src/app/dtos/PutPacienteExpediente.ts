import { DtoExpediente } from "./DtoExpediente";
import { DtoPaciente } from "./DtoPaciente";


export class PutPacienteExpediente {
    constructor(
        public paciente: DtoPaciente,
        public expediente: DtoExpediente
    ) {}
}