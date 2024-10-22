import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoMedicamento {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string
    ) { }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'id', tipo: 'string' },
            { name: 'nombre', tipo: 'string' },
            { name: 'descripcion', tipo: 'string' },
        ];
    }

}