import { Routes } from '@angular/router';
import {GestionViewComponent} from "./components/gestion-view/gestion-view.component";
import {MainViewComponent} from "./components/main-view/main-view.component";
import { SesionesViewComponent } from './components/sesiones-view/sesiones-view.component';
import { SesionViewComponent } from './components/sesion-view/sesion-view.component';
import { ExpedienteViewComponent } from './components/expediente-view/expediente-view.component';
import {FullSesionComponent} from './components/sesiones-view/detail-sesion/full-sesion/full-sesion.component';
import {Error404Component } from './components/error/error404.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { ConsentimientoViewComponent } from './components/consentimiento-view/consentimiento-view.component';
import { GestionUsuariosViewComponent } from './components/gestionusuarios-view/gestionusuarios-view.component';
import { CrearUsuarioComponent } from './components/gestionusuarios-view/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './components/gestionusuarios-view/actualizar-usuario/actualizar-usuario.component';
import { authGuard } from './guards/auth.guard'; 
import { roleGuard } from './guards/role.guard';
import {mainAccessGuard} from './guards/mainaccess.guard';
import { NotificarViewComponent } from './components/notificar-view/notificar-view.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "home", component: MainViewComponent, canActivate: [ mainAccessGuard ]},
    {path: "gestion", component: GestionViewComponent, canActivate: [ roleGuard ], data: {rol: "Psicologo"}},
    {path: "sesion", component:SesionViewComponent, canActivate: [roleGuard ], data: {rol: "Psicologo"}},
    {path: "expediente", component: ExpedienteViewComponent, canActivate: [ roleGuard ], data: {rol: "Psicologo"}},
    {path: "expediente/:id", component: ExpedienteViewComponent,canActivate: [ roleGuard ], data: {rol: "Psicologo"}},
    {path: "sesiones", component: SesionesViewComponent, canActivate: [ roleGuard ], data: {rol: "Psicologo"}},
    {path: "sesioncompleta",component: FullSesionComponent, canActivate: [ roleGuard ], data: {rol: "Psicologo"}},
    {path: "login", component:LoginViewComponent , canActivate: [ authGuard ]},
    {path: "consentimiento",component:ConsentimientoViewComponent, canActivate: [ roleGuard ], data: {rol: "Recepcionista"}},
    {path:"usuarios", component: GestionUsuariosViewComponent, canActivate: [ roleGuard ], data: {rol: "Administrador"}},
    {path: "crearusuario", component: CrearUsuarioComponent, canActivate: [ roleGuard ], data: {rol: "Administrador"}},
    {path: "actualizarusuario", component: ActualizarUsuarioComponent, canActivate: [ roleGuard ], data: {rol: "Administrador"}},
    {path: "avisos", component: NotificarViewComponent, canActivate: [ roleGuard ], data: {rol: "Recepcionista"}},
    {path: "**", component: Error404Component }
];
