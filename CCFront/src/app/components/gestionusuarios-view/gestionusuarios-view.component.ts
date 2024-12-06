import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { Router } from '@angular/router';

@Component({
  selector: 'gestionusuarios-view',
  standalone: true,
  imports: [CommonModule, TablaUsuariosComponent],
  templateUrl: './gestionusuarios-view.component.html',
  styleUrl: './gestionusuarios-view.component.css'
})
export class GestionUsuariosViewComponent {

    constructor(private router: Router) { }



    crearUsuario() {

        this.router.navigate(["/crearusuario"]);
        
    }






}