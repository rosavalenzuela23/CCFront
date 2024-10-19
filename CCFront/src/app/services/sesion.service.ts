import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtoSesion } from '../dtos/DtoSesion';
import { Routes } from './Routes';
import { Router } from '@angular/router';

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

}
