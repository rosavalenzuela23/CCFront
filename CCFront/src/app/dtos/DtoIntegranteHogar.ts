export class DtoIntegranteHogar {
    private id: number;
    private nombre: string;
    private statusRelacion: string;
    private ocupacion: string;
    private parentesco: string;
    private fechaNacimiento: string;

    constructor(
        id: number,
        nombre: string,
        statusRelacion: string,
        ocupacion: string,
        parentesco: string,
        fechaNacimiento: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.statusRelacion = statusRelacion;
        this.ocupacion = ocupacion;
        this.parentesco = parentesco;
        this.fechaNacimiento = fechaNacimiento;
    }

    // Getters
    public getId(): number{
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }

    public getStatusRelacion(): string {
        return this.statusRelacion;
    }

    public getOcupacion(): string {
        return this.ocupacion;
    }

    public getParentesco(): string {
        return this.parentesco;
    }

    public getFechaNacimiento(): string {
        return this.fechaNacimiento;
    }

    // Setters
    public setId(id: number): void{
        this.id = id;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setStatusRelacion(statusRelacion: string): void {
        this.statusRelacion = statusRelacion;
    }

    public setOcupacion(ocupacion: string): void {
        this.ocupacion = ocupacion;
    }

    public setParentesco(parentesco: string): void {
        this.parentesco = parentesco;
    }

    public setFechaNacimiento(fechaNacimiento: string): void {
        this.fechaNacimiento = fechaNacimiento;
    }
}