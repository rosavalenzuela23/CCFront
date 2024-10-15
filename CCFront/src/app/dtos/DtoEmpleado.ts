export class DtoEmpleado {
    private id: number;
    private usuario: string;
    private password: string;

    constructor(id: number, usuario: string, password: string) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public getPassword(): string {
        return this.password;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
}