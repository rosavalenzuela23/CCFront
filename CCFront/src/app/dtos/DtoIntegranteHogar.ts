export class DtoIntegranteHogar {
    constructor(
        public id: number,
        public nombre: string,
        public statusRelacion: string,
        public ocupacion: string,
        public parentesco: string,
        public fechaNacimiento: string
    ){ }
}