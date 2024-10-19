import { DtoFamiliaresConfianza } from "./DtoFamiliaresConfianza";
import { DtoInstrumento } from "./DtoInstrumento";
import { DtoIntegranteHogar } from "./DtoIntegranteHogar";
import { DtoMedicamentoDelExpediente } from "./DtoMedicamentoDelExpediente";
import { DtoPaciente } from "./DtoPaciente";


export class DtoExpediente {
    constructor (
    public id: number,
    public enfermedadPrevia: string,
    public antecedentes: string,
    public preguntaMagica: string,
    public motivoConsulta: string,
    public medicamentos: DtoMedicamentoDelExpediente[],
    public integrantesHogar: DtoIntegranteHogar[],
    public familiaresConfianza: DtoFamiliaresConfianza[],
    public instrumentos: DtoInstrumento[],
    public paciente: DtoPaciente
    ){}
}