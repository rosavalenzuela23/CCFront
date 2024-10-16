import { Injectable } from '@angular/core';
import { DtoPsicologo } from '../dtos/DtoPsicologo';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor() { }

  getPsicologoActual(): DtoPsicologo {

    const dto: DtoPsicologo = JSON.parse(sessionStorage.getItem('psicologo') || "{}")

    return dto;
  }

}
