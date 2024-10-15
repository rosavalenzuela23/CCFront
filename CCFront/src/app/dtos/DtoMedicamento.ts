export class DtoMedicamento {
    private id: number;
    private nombre: string;
    private descripcion: string;

    constructor(id: number, nombre: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
}