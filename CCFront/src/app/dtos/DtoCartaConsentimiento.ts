export class DtoCartaConsentimiento{
    private id: number;
    private rutaArchivo: string;

    constructor(id:number, rutaArchivo: string){
        this.id = id;
        this.rutaArchivo = rutaArchivo;
    }

    public getId(): number{
        return this.id;
    }

    public getRutaArchivo(): string{
        return this.rutaArchivo;
    }

    public setId(id: number):void{
        this.id = id;
    }
    
    public setRutaArchivo(rutaArchivo: string): void{
        this.rutaArchivo = rutaArchivo;
    }
}