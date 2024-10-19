import { Injectable } from '@angular/core';
import { DtoPsicologo } from '../dtos/DtoPsicologo';
import { SessionStorageNames } from './sessionStorageNames';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor() { }

  getPsicologoActual(): DtoPsicologo {

    const dto: DtoPsicologo = JSON.parse(sessionStorage.getItem(SessionStorageNames.USUARIO_ACTUAL) || "{}")

    return dto;
  }

}
