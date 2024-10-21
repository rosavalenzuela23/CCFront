export class DtoFamiliaresConfianza {

    constructor(
        public id: number,
        public nombre: string,
        public parentesco: string,
        public telefono: string
    ) { }

    static getProperties(): string[] {
        const example = new DtoFamiliaresConfianza(-1, "NA", "NA", "NA");
        return Object.getOwnPropertyNames(example);
    }

}