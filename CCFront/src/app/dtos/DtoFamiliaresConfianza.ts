import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoFamiliaresConfianza {

    constructor(
        public nombre: string,
        public parentesco: string,
        public telefono: string,
        public id?: number
    ) { }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'nombre', tipo: 'string', vista: 'Nombre' },
            { name: 'parentesco', tipo: 'string', vista: 'Parentezco' },
            { name: 'telefono', tipo: 'tel', vista: 'Teléfono' }
        ]
    }

}