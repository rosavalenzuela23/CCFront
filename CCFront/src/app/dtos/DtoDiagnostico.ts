
export class DtoDiagnostico{
    private id: number;
    private titulo:string;
    private descripcion:string;

    constructor(
        id: number,
        titulo:string, 
        descripcion:string
    ){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    public getId(): number{
        return this.id;
    }
    public getTitulo(): string {
        return this.titulo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    // Setters
    public setId(id: number): void{
        this.id = id;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
}