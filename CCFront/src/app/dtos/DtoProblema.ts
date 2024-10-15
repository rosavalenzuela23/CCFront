export class DtoProblema {
    private id: number;
    private descripcion: string;
    private frecuencia: string;
    private intensidad: number;
    private afectacionFamiliar: number;
    private afectacionSalud: number;
    private afectacionPareja: number;
    private afectacionAmigos: number;
    private afectacionLaboral: number;

    constructor(
        id: number,
        descripcion: string,
        frecuencia: string,
        intensidad: number,
        afectacionFamiliar: number,
        afectacionSalud: number,
        afectacionPareja: number,
        afectacionAmigos: number,
        afectacionLaboral: number
    ) {
        this.id = id;
        this.descripcion = descripcion;
        this.frecuencia = frecuencia;
        this.intensidad = intensidad;
        this.afectacionFamiliar = afectacionFamiliar;
        this.afectacionSalud = afectacionSalud;
        this.afectacionPareja = afectacionPareja;
        this.afectacionAmigos = afectacionAmigos;
        this.afectacionLaboral = afectacionLaboral;
    }

    // Getters
    public getId(): number{
        return this.id;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }

    public getFrecuencia(): string {
        return this.frecuencia;
    }

    public getIntensidad(): number {
        return this.intensidad;
    }

    public getAfectacionFamiliar(): number {
        return this.afectacionFamiliar;
    }

    public getAfectacionSalud(): number {
        return this.afectacionSalud;
    }

    public getAfectacionPareja(): number {
        return this.afectacionPareja;
    }

    public getAfectacionAmigos(): number {
        return this.afectacionAmigos;
    }

    public getAfectacionLaboral(): number {
        return this.afectacionLaboral;
    }

    // Setters
    public setId(id: number):void{
        this.id = id;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setFrecuencia(frecuencia: string): void {
        this.frecuencia = frecuencia;
    }

    public setIntensidad(intensidad: number): void {
        this.intensidad = intensidad;
    }

    public setAfectacionFamiliar(afectacionFamiliar: number): void {
        this.afectacionFamiliar = afectacionFamiliar;
    }

    public setAfectacionSalud(afectacionSalud: number): void {
        this.afectacionSalud = afectacionSalud;
    }

    public setAfectacionPareja(afectacionPareja: number): void {
        this.afectacionPareja = afectacionPareja;
    }

    public setAfectacionAmigos(afectacionAmigos: number): void {
        this.afectacionAmigos = afectacionAmigos;
    }

    public setAfectacionLaboral(afectacionLaboral: number): void {
        this.afectacionLaboral = afectacionLaboral;
    }
}