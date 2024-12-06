import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {EmpleadoService} from './../../../services/empleado.service';
import {DtoEmpleado} from './../../../dtos/DtoEmpleado';
import { Modal } from 'bootstrap';


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

    //empleado seleccionado
    empleadoSeleccionado?: DtoEmpleado;  

    constructor(private empleadoService: EmpleadoService, private router: Router){}

    ngOnInit(){
        this.empleadoService.obtenerEmpleados().subscribe(
            (empleados) => {
                this.empleados = empleados;
                console.log(this.empleados);
            }
        )
    }


    //método para actualizar un empleado
    actualizarCredenciales(empleado: DtoEmpleado){
        this.router.navigateByUrl('/actualizarusuario', { state: { empleado } });
    }

    //Método para eliminar un empleado
    darDeBajaEmpleado(empleado: DtoEmpleado){
        this.empleadoService.darDeBajaEmpleado(empleado).then(()=>{

            console.log("se eliminó con éxito");
            
            const index = this.empleados.findIndex(e => e.id === empleado.id);
            if (index !== -1) {
                this.empleados[index].estado = false;
            }

            const modalElement = document.getElementById('exampleModal');
            if (modalElement) {
                const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
                modalInstance.hide();
            }
        })

    }

    //método para guardar el empleado seleccionado
    guardarEmpleadoSeleccionado(empleado: DtoEmpleado){
        this.empleadoSeleccionado = empleado;
    }
}
