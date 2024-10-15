export class DtoRespuesta {
    private id: number;
    private valoracion: string;
    private rutaArchivo: string;

    constructor(id:number,valoracion: string, rutaArchivo: string) {
        this.id = id;
        this.valoracion = valoracion;
        this.rutaArchivo = rutaArchivo;
    }

    // Getters
    public getId(): number{
        return this.id;
    }

    public getValoracion(): string {
        return this.valoracion;
    }

    public getRutaArchivo(): string {
        return this.rutaArchivo;
    }

    // Setters
    public setId(id: number): void{
        this.id = id;
    }
    
    public setValoracion(valoracion: string): void {
        this.valoracion = valoracion;
    }

    public setRutaArchivo(rutaArchivo: string): void {
        this.rutaArchivo = rutaArchivo;
    }
}