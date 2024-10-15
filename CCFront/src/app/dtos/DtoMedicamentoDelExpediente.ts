export class DtoMedicamentoDelExpediente {
    private id: number;
    private dosis: string;
    private frecuencia: string;

    constructor(id: number, dosis: string, frecuencia: string) {
        this.id = id;
        this.dosis = dosis;
        this.frecuencia = frecuencia;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getDosis(): string {
        return this.dosis;
    }

    public getFrecuencia(): string {
        return this.frecuencia;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setDosis(dosis: string): void {
        this.dosis = dosis;
    }

    public setFrecuencia(frecuencia: string): void {
        this.frecuencia = frecuencia;
    }
}