export class DtoInstrumento {
    private id: number;
    private textoArchivo: string;
    private rutaArchivo: string;

    constructor(id: number, textoArchivo: string, rutaArchivo: string) {
        this.id = id;
        this.textoArchivo = textoArchivo;
        this.rutaArchivo = rutaArchivo;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getTextoArchivo(): string {
        return this.textoArchivo;
    }

    public getRutaArchivo(): string {
        return this.rutaArchivo;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setTextoArchivo(textoArchivo: string): void {
        this.textoArchivo = textoArchivo;
    }

    public setRutaArchivo(rutaArchivo: string): void {
        this.rutaArchivo = rutaArchivo;
    }
}