export class DtoMedicamento {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string
    ) { }

    static getProperties(): string[] {
        const example = new DtoMedicamento(-1, "NA", "NA");
        return Object.getOwnPropertyNames(example);
    }

}