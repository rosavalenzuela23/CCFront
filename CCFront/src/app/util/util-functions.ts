/**
 * * Recibe una fecha en formato ISO para obtener un recorte de la fecha solo con el año
 * * mes y el dia
 * * @param date fecha en formato ISO
 * * @returns fecha en formato yyyy-MM-dd
 * */
export function getOnlyDate(date: string): string {
    const finalDate = 10;
    const yyyyMMdd = date.slice(0, finalDate); 
    return yyyyMMdd;
}