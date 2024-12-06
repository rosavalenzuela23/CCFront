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
            { name: 'nombre', tipo: 'string', vista: 'Nombre' },
            { name: 'statusRelacion', tipo: 'string', vista: 'Estatus relación' },
            { name: 'ocupacion', tipo: 'string', vista: 'Ocupación' },
            { name: 'parentesco', tipo: 'string', vista: 'Parentezco' },
            { name: 'fechaNacimiento', tipo: 'date', vista: 'Fecha nacimiento' }
        ]
    }

}