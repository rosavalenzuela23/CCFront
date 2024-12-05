import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { SessionStorageNames } from './sessionStorageNames';
import { DtoEmpleado } from '../dtos/DtoEmpleado';
import { Routes } from "./Routes";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService{

    constructor( private http: HttpClient, private router: Router) { }

    async registrarEmpleado(usuario: string, password: string, rol: string){
    
        const response: any = await lastValueFrom(
        this.http.post(Routes.empleado+rol, { usuario, password }));
    
    }

    obtenerEmpleados(): Observable<DtoEmpleado[]>{   

        return this.http.get<DtoEmpleado[]>(Routes.empleado+'all');
    }

    async actualizarEmpleado(empleado: DtoEmpleado){
    
        

        const response: any = await lastValueFrom(
        this.http.put(Routes.empleado+"actualizar/"+empleado.token, { id:empleado.id, usuario:empleado.usuario, password:empleado.password, token:empleado.token, estado:empleado.estado }));
    
    }

  

}
