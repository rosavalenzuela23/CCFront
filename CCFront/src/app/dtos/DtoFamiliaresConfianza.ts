import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoFamiliaresConfianza {

    constructor(
        public id: number,
        public nombre: string,
        public parentesco: string,
        public telefono: string
    ) { }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'id', tipo: 'string'},
            { name: 'nombre', tipo: 'string' },
            { name: 'parentesco', tipo: 'string' },
            { name: 'telefono', tipo: 'string' }
        ]
    }

}