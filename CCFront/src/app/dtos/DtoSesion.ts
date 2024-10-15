import { DtoComentarioSesion } from "./DtoComentarioSesion";
import { DtoProblema } from "./DtoProblema";

export class DtoSesion {
    private id: number;
    private problemasSesion: DtoProblema[];
    private comentariosSesion: DtoComentarioSesion[];

    constructor(id: number, problemasSesion: DtoProblema[], comentariosSesion: DtoComentarioSesion[]) {
        this.id = id;
        this.problemasSesion = problemasSesion;
        this.comentariosSesion = comentariosSesion;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getProblemasSesion(): DtoProblema[] {
        return this.problemasSesion;
    }

    public getComentariosSesion(): DtoComentarioSesion[] {
        return this.comentariosSesion;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setProblemasSesion(problemasSesion: DtoProblema[]): void {
        this.problemasSesion = problemasSesion;
    }

    public setComentariosSesion(comentariosSesion: DtoComentarioSesion[]): void {
        this.comentariosSesion = comentariosSesion;
    }
}