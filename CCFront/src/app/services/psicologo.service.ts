import { Injectable } from '@angular/core';
import { DtoPsicologo } from '../dtos/DtoPsicologo';
import { SessionStorageNames } from './sessionStorageNames';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Routes } from './Routes';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor(
    private http: HttpClient
  ) { }

  getPsicologoActual(): DtoPsicologo {

    const dto: DtoPsicologo = JSON.parse(sessionStorage.getItem(SessionStorageNames.USUARIO_ACTUAL) || "{}")

    return dto;
  }

  obtenerTodos(): Observable<DtoPsicologo[]> {
    return this.http.get<DtoPsicologo[]>(
      Routes.empleado+"obtener/todos/psicologo"
    );
  }

}
