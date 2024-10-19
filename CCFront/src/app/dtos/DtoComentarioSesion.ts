export class DtoComentarioSesion {

    constructor(
        public id: number | null,
        public numeroSesion: string,
        public fecha: string,
        public aspectoAMedir: string,
        public inicio: number,
        public fin: number
    ){}

}