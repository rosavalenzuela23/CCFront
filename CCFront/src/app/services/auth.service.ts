import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { SessionStorageNames } from './sessionStorageNames';
import { DtoEmpleado } from '../dtos/DtoEmpleado';
import { Routes } from "./Routes";
import { Router } from '@angular/router';
import { catchError, lastValueFrom, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  

  constructor( private http: HttpClient, private router: Router) { }

  async logIn(usuario: string, password: string){
    console.log(usuario);
    console.log(password);
    //Esto se sustituirá por una llamada a la API que devolverá el usuario
    const response: any = await lastValueFrom(
      this.http.post(Routes.empleado, { usuario, password }).pipe(catchError((error: HttpErrorResponse) =>{
        console.log("este es el errooorrr: ", error.error.message);
          throw(error.error.message);
      }))
    );
    
    
    const empleado = new DtoEmpleado(response.id, response.usuario,response.password, response.token, response.estado);
    sessionStorage.setItem(SessionStorageNames.TOKEN, response.token);
    sessionStorage.setItem( SessionStorageNames.USUARIO_ACTUAL, JSON.stringify(empleado));
    
    this.router.navigate(["/home"]);
  }

    logOut(){
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    }

}
