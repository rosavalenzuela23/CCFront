import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {EmpleadoService} from './../../../services/empleado.service'
import {DtoEmpleado} from './../../../dtos/DtoEmpleado'

@Component({
  selector: 'tabla-usuarios-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
export class TablaUsuariosComponent {

    //Lista de empleados que se mostrarán en la tabla
    empleados: DtoEmpleado[] = [];

    constructor(private empleadoService: EmpleadoService, private router: Router){}

    ngOnInit(){
        this.empleadoService.obtenerEmpleados().subscribe(
            (empleados) => {
                this.empleados = empleados;
                console.log(this.empleados);
            }
        )
    }


    //método para ectualizar un empleado
    actualizarCredenciales(empleado: DtoEmpleado){
        this.router.navigateByUrl('/actualizarusuario', { state: { empleado } });
    }

}
