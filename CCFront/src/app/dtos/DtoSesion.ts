import { DtoComentarioSesion } from "./DtoComentarioSesion";
import { DtoProblema } from "./DtoProblema";

export type DtoSesion = {
    id: number,
    problemasSesion: DtoProblema[],
    comentariosSesion: DtoComentarioSesion[],
}