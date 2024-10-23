import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoIntegranteHogar {
    constructor(
        public nombre: string,
        public statusRelacion: string,
        public ocupacion: string,
        public parentesco: string,
        public fechaNacimiento: string,
        public id?: number
    ){ }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'nombre', tipo: 'string' },
            { name: 'estatusRelacion', tipo: 'string' },
            { name: 'ocupacion', tipo: 'string' },
            { name: 'parentesco', tipo: 'string' },
            { name: 'fechaNacimiento', tipo: 'date' }
        ]
    }

}