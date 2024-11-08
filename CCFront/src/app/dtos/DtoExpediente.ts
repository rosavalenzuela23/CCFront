import { DtoFamiliaresConfianza } from "./DtoFamiliaresConfianza";
import { DtoInstrumento } from "./DtoInstrumento";
import { DtoIntegranteHogar } from "./DtoIntegranteHogar";
import { DtoMedicamentoDelExpediente } from "./DtoMedicamentoDelExpediente";


export class DtoExpediente {
    constructor (
    public enfermedadPrevia: string | undefined,
    public antecedentes: string,
    public preguntaMagica: string,
    public motivoConsulta: string,
    public medicamentos: string,
    public integranteHogar: DtoIntegranteHogar[],
    public familiaresConfianza: DtoFamiliaresConfianza[],
    public diagnostico: string | undefined,
    public deseo: string,
    public id?: number,
    public instrumentos?: DtoInstrumento[],
    ){}
}