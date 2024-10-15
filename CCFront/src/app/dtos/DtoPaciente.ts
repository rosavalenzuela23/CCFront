export class DtoPaciente {
    private id: number;
    private nombre: string;
    private estadoCivil: string;
    private telefono: string;
    private vivienda: string;
    private telefonoEmergencia: string;

    constructor(
        id: number,
        nombre: string,
        estadoCivil: string,
        telefono: string,
        vivienda: string,
        telefonoEmergencia: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.estadoCivil = estadoCivil;
        this.telefono = telefono;
        this.vivienda = vivienda;
        this.telefonoEmergencia = telefonoEmergencia;
    }

    
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEstadoCivil(): string {
        return this.estadoCivil;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public getVivienda(): string {
        return this.vivienda;
    }

    public getTelefonoEmergencia(): string {
        return this.telefonoEmergencia;
    }
}