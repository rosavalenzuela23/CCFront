import { DtoFamiliaresConfianza } from "./DtoFamiliaresConfianza";
import { DtoInstrumento } from "./DtoInstrumento";
import { DtoIntegranteHogar } from "./DtoIntegranteHogar";
import { DtoMedicamentoDelExpediente } from "./DtoMedicamentoDelExpediente";

export class DtoExpediente {
    private id: number;
    private enfermedadPrevia: string;
    private antecedentes: string;
    private preguntaMagica: string;
    private motivoConsulta: string;
    private medicamentos: DtoMedicamentoDelExpediente[];
    private integrantesHogar: DtoIntegranteHogar[];
    private familiaresConfianza: DtoFamiliaresConfianza[];
    private instrumentos: DtoInstrumento[];

    constructor(
        id: number,
        enfermedadPrevia: string,
        antecedentes: string,
        preguntaMagica: string,
        motivoConsulta: string,
        medicamentos: DtoMedicamentoDelExpediente[],
        integrantesHogar: DtoIntegranteHogar[],
        familiaresConfianza: DtoFamiliaresConfianza[],
        instrumentos: DtoInstrumento[]
    ) {
        this.id = id;
        this.enfermedadPrevia = enfermedadPrevia;
        this.antecedentes = antecedentes;
        this.preguntaMagica = preguntaMagica;
        this.motivoConsulta = motivoConsulta;
        this.medicamentos = medicamentos;
        this.integrantesHogar = integrantesHogar;
        this.familiaresConfianza = familiaresConfianza;
        this.instrumentos = instrumentos;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getEnfermedadPrevia(): string {
        return this.enfermedadPrevia;
    }

    public getAntecedentes(): string {
        return this.antecedentes;
    }

    public getPreguntaMagica(): string {
        return this.preguntaMagica;
    }

    public getMotivoConsulta(): string {
        return this.motivoConsulta;
    }

    public getMedicamentos(): DtoMedicamentoDelExpediente[] {
        return this.medicamentos;
    }

    public getIntegrantesHogar(): DtoIntegranteHogar[] {
        return this.integrantesHogar;
    }

    public getFamiliaresConfianza(): DtoFamiliaresConfianza[] {
        return this.familiaresConfianza;
    }

    public getInstrumentos(): DtoInstrumento[] {
        return this.instrumentos;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setEnfermedadPrevia(enfermedadPrevia: string): void {
        this.enfermedadPrevia = enfermedadPrevia;
    }

    public setAntecedentes(antecedentes: string): void {
        this.antecedentes = antecedentes;
    }

    public setPreguntaMagica(preguntaMagica: string): void {
        this.preguntaMagica = preguntaMagica;
    }

    public setMotivoConsulta(motivoConsulta: string): void {
        this.motivoConsulta = motivoConsulta;
    }

    public setMedicamentos(medicamentos: DtoMedicamentoDelExpediente[]): void {
        this.medicamentos = medicamentos;
    }

    public setIntegrantesHogar(integrantesHogar: DtoIntegranteHogar[]): void {
        this.integrantesHogar = integrantesHogar;
    }

    public setFamiliaresConfianza(familiaresConfianza: DtoFamiliaresConfianza[]): void {
        this.familiaresConfianza = familiaresConfianza;
    }

    public setInstrumentos(instrumentos: DtoInstrumento[]): void {
        this.instrumentos = instrumentos;
    }
}