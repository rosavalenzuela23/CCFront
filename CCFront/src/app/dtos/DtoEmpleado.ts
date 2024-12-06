export class DtoEmpleado {
    constructor(
    public id: number,
    public usuario: string,
    public password: string,
    public token: string,
    public estado: boolean
    ){}
}