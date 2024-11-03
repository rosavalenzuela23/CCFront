import { DtoFamiliaresConfianza } from "./DtoFamiliaresConfianza";
import { DtoInstrumento } from "./DtoInstrumento";
import { DtoIntegranteHogar } from "./DtoIntegranteHogar";
import { DtoMedicamentoDelExpediente } from "./DtoMedicamentoDelExpediente";


export class DtoExpediente {
    constructor (
    public enfermedadPrevia: string,
    public antecedentes: string,
    public preguntaMagica: string,
    public motivoConsulta: string,
    public medicamentos: DtoMedicamentoDelExpediente[],
    public integranteHogar: DtoIntegranteHogar[],
    public familiaresConfianza: DtoFamiliaresConfianza[],
    public diagnostico: string | null | undefined,
    public deseo: string,
    public id?: number,
    public instrumentos?: DtoInstrumento[],
    ){}
}