export class DtoPaciente {
    constructor(
        public nombre: string,
        public estadoCivil: string,
        public fecha: string,
        public telefono: string,
        public tipoVivienda: string,
        public telefonoEmergencia: string,
        public escolaridad: string,
        public id?: number,
    ) {}
        
}