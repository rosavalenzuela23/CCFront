export class DtoComentarioSesion {

    constructor(
        public id: number | null,
        public aspectoAMedir: string,
        public valoracionInicio: number,
        public valoracionFin: number
    ){}

}