export class DtoPaciente {
    constructor(
        public id: number,
        public nombre: string,
        public estadoCivil: string,
        public telefono: string,
        public vivienda: string,
        public telefonoEmergencia: string) { }
}