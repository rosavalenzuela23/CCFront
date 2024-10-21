export class DtoIntegranteHogar {
    constructor(
        public id: number,
        public nombre: string,
        public statusRelacion: string,
        public ocupacion: string,
        public parentesco: string,
        public fechaNacimiento: string
    ){ }

    static getProperties(): string[] {
        const example = new DtoIntegranteHogar(-1, "NA", "NA", "NA", "NA", "NA");
        return Object.getOwnPropertyNames(example);
    }

}