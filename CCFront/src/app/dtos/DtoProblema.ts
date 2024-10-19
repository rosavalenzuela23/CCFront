export class DtoProblema {
    constructor(
        public id: number | null,
        public descripcion: string,
        public frecuencia: string,
        public intensidad: number,
        public afectacionFamiliar: number,
        public afectacionSalud: number,
        public afectacionPareja: number,
        public afectacionAmigos: number,
        public afectacionLaboral: number,
        public afectacionEspiritual: number,
        public afectacionEconomico: number) { }
}