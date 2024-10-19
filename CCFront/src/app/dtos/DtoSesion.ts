import { DtoComentarioSesion } from "./DtoComentarioSesion";
import { DtoExpediente } from "./DtoExpediente";
import { DtoProblema } from "./DtoProblema";
import { DtoPsicologo } from "./DtoPsicologo";

export class DtoSesion {

    constructor(
        public id: number | null,
        public problemasSesion: DtoProblema[],
        public comentarios: DtoComentarioSesion[],
        public expediente: DtoExpediente | null,

        public puntuacionVestimenta: number,
        public puntuacionBienestar: number,
        public puntuacionArregloPersonal: number,
        public puntuacionPostura: number,
        public puntuacionContactoVisual: number,
        public puntuacionHabla: number,
        public puntuacionVelocidadHabla: number,
        public puntuacionVolumenHabla: number,
        public puntuacionArticulacion: number,
        public puntuacionCoherencia: number,
        public puntuacionEspontaneidad: number,

        public comentarioPsicologa: string,

        public psicologo: DtoPsicologo | null,
        public fecha: string
    ) { }
}