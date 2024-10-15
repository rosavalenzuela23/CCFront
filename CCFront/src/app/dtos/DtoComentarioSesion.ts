export class DtoComentarioSesion {
    private id: number;
    private numeroSesion: string;
    private fecha: string;
    private aspectoAMedir: string;
    private inicio: number;
    private fin: number;

    constructor(
        id: number,
        numeroSesion: string,
        fecha: string,
        aspectoAMedir: string,
        inicio: number,
        fin: number
    ) {
        this.id = id;
        this.numeroSesion = numeroSesion;
        this.fecha = fecha;
        this.aspectoAMedir = aspectoAMedir;
        this.inicio = inicio;
        this.fin = fin;
    }

    // Getters
    public getId(): number{
        return this.id;
    }
    public getNumeroSesion(): string {
        return this.numeroSesion;
    }

    public getFecha(): string {
        return this.fecha;
    }

    public getAspectoAMedir(): string {
        return this.aspectoAMedir;
    }

    public getInicio(): number {
        return this.inicio;
    }

    public getFin(): number {
        return this.fin;
    }

    // Setters
    public setId(id: number): void{
        this.id = id;
    }
    public setNumeroSesion(numeroSesion: string): void {
        this.numeroSesion = numeroSesion;
    }

    public setFecha(fecha: string): void {
        this.fecha = fecha;
    }

    public setAspectoAMedir(aspectoAMedir: string): void {
        this.aspectoAMedir = aspectoAMedir;
    }

    public setInicio(inicio: number): void {
        this.inicio = inicio;
    }

    public setFin(fin: number): void {
        this.fin = fin;
    }
}