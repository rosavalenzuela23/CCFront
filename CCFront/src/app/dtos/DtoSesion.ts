import { DtoComentarioSesion } from "./DtoComentarioSesion";
import { DtoExpediente } from "./DtoExpediente";
import { DtoProblema } from "./DtoProblema";
import { DtoPsicologo } from "./DtoPsicologo";

export class DtoSesion {

    constructor(
        public id: number | null,
        public problemasSesion: DtoProblema[],
        public comentariosSesion: DtoComentarioSesion[],
        public expediente: DtoExpediente | null,
        public psicologo: DtoPsicologo | null
    ) { }
}