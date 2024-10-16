import { DtoComentarioSesion } from "./DtoComentarioSesion";
import { DtoExpediente } from "./DtoExpediente";
import { DtoProblema } from "./DtoProblema";
import { DtoPsicologo } from "./DtoPsicologo";

export type DtoSesion = {
    id: number | null,
    problemasSesion: DtoProblema[],
    comentariosSesion: DtoComentarioSesion[],
    expediente: DtoExpediente | null,
    psicologo: DtoPsicologo | null
}