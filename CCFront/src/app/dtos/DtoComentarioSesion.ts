export class DtoComentarioSesion {

    constructor(
        public id: number | null,
        public fecha: string,
        public aspectoAMedir: string,
        public valoracionInicio: number,
        public valoracionFin: number
    ){}

}