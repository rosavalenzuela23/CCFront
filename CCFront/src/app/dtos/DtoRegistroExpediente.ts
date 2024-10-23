import { DtoExpediente } from "./DtoExpediente";
import { DtoPaciente } from "./DtoPaciente";
import { DtoPsicologo } from "./DtoPsicologo";

export class DtoRegistroExpedientePaciente {
    constructor(
        public paciente: DtoPaciente,
        public psicologo: DtoPsicologo,
        public expediente: DtoExpediente
    ){}
}