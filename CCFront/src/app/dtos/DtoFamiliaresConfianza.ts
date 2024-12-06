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
            { name: 'nombre', tipo: 'string' },
            { name: 'parentesco', tipo: 'string' },
            { name: 'telefono', tipo: 'tel' }
        ]
    }

}