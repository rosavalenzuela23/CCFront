export class DtoPaciente {
    constructor(
        public nombre: string,
        public estadoCivil: string,
        public fecha: string,
        public telefono: string,
        public vivienda: string,
        public telefonoEmergencia: string,
        public id?: number,
    ) {}
        
}