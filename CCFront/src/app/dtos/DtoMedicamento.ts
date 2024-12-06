import { CamposConTipo } from "../tipos/camposConTipos";

export class DtoMedicamento {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string
    ) { }

    static getFieldsWithType(): CamposConTipo[] {
        return [
            { name: 'id', tipo: 'string', vista: "ID" },
            { name: 'nombre', tipo: 'string', vista: "Nombre" },
            { name: 'descripcion', tipo: 'string', vista: "Descripción" },
        ];
    }

}