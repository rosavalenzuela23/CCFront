export class DtoComentarioSesion {

    constructor(
        public id: number,
        public numeroSesion: number,
        public fecha: string,
        public aspectoAMedir: string,
        public inicio: number,
        public fin: number
    ){}

}