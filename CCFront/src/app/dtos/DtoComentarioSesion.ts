export class DtoComentarioSesion {

    constructor(
        public id: number | null,
        public fecha: string,
        public aspectoAMedir: string,
        public inicio: number,
        public fin: number
    ){}

}