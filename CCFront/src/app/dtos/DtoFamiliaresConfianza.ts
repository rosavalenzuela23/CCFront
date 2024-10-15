export class DtoFamiliaresConfianza {
    private id: number;
    private nombre: string;
    private parentesco: string;
    private telefono: string;

    constructor(id: number ,nombre: string, parentesco: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.parentesco = parentesco;
        this.telefono = telefono;
    }

    
    public getId(): number{
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }

    public getParentesco(): string {
        return this.parentesco;
    }

    public getTelefono(): string {
        return this.telefono;
    }


    public setId(id: number): void{
        this.id = id;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setParentesco(parentesco: string): void {
        this.parentesco = parentesco;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }
}