import { DtoFamiliaresConfianza } from "./DtoFamiliaresConfianza";
import { DtoInstrumento } from "./DtoInstrumento";
import { DtoIntegranteHogar } from "./DtoIntegranteHogar";
import { DtoMedicamentoDelExpediente } from "./DtoMedicamentoDelExpediente";
import { DtoPaciente } from "./DtoPaciente";


export type DtoExpediente = {
    id: number,
    enfermedadPrevia: string,
    antecedentes: string,
    preguntaMagica: string,
    motivoConsulta: string,
    medicamentos: DtoMedicamentoDelExpediente[],
    integrantesHogar: DtoIntegranteHogar[],
    familiaresConfianza: DtoFamiliaresConfianza[],
    instrumentos: DtoInstrumento[],
    paciente: DtoPaciente,
}