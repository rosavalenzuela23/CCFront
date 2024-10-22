import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtoSesion } from '../dtos/DtoSesion';
import { Routes } from './Routes';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { SessionStorageNames } from "./sessionStorageNames";
import { DtoExpediente } from '../dtos/DtoExpediente';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private http: HttpClient, private routes: Router) { }

  guardarSesion(sesion: DtoSesion) {

    this.http.post(Routes.sesion, sesion).subscribe( res => {
      this.routes.navigate(["gestion"])
    })

  }

  //Guardar la sesión en el sessionStorage como json
  guardarSesionEnSessionStorage(sesion: DtoSesion) {
    sessionStorage.setItem(
        SessionStorageNames.SESION_ACTUAL,
        JSON.stringify(sesion)
    );
  }

  //te regresa la sesión actual del session storage pero en DTOSesion
  obtenerExpedienteActual(): DtoSesion | null {
    return JSON.parse(sessionStorage.getItem(SessionStorageNames.SESION_ACTUAL) || "{}");
  }


  //Pétición asincrona para manejar la obtención de las sesiones de un expediente
  async getSesionesExpedientePorId(): Promise<DtoSesion[]>{

    const expediente: DtoExpediente = JSON.parse(sessionStorage.getItem(SessionStorageNames.EXPEDIENTE_ACTUAL)|| "{}");
    console.log("el expediente es el siguiente:");
    console.log(expediente);
    console.log("el id del expediente es: ");
    console.log(expediente.id);

    const res = await lastValueFrom(this.http.get<DtoSesion[]>(Routes.sesionGeneral + 'obtenerSesionesExpediente/' + expediente.id));

    return res;
  }

}
