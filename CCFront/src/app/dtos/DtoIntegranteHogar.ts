import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoIntegranteHogar {
    constructor(
        public id: number,
        public nombre: string,
        public statusRelacion: string,
        public ocupacion: string,
        public parentesco: string,
        public fechaNacimiento: string
    ){ }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'id', tipo: 'string' },
            { name: 'nombre', tipo: 'string' },
            { name: 'estatusRelacion', tipo: 'string' },
            { name: 'ocupacion', tipo: 'string' },
            { name: 'parentesco', tipo: 'string' },
            { name: 'fechaNacimiento', tipo: 'date' }
        ]
    }

}