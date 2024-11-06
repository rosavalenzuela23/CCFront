import { Routes } from '@angular/router';
import {GestionViewComponent} from "./components/gestion-view/gestion-view.component";
import {MainViewComponent} from "./components/main-view/main-view.component";
import { SesionesViewComponent } from './components/sesiones-view/sesiones-view.component';
import { SesionViewComponent } from './components/sesion-view/sesion-view.component';
import { ExpedienteViewComponent } from './components/expediente-view/expediente-view.component';
import {FullSesionComponent} from './components/sesiones-view/detail-sesion/full-sesion/full-sesion.component';
import {Error404Component } from './components/error/error404.component';
import { LoginViewComponent } from './components/login-view/login-view.component';

export const routes: Routes = [
    {path: "", component: MainViewComponent},
    {path: "gestion", component: GestionViewComponent},
    {path: "sesion", component:SesionViewComponent},
    {path: "expediente", component: ExpedienteViewComponent},
    {path: "expediente/:id", component: ExpedienteViewComponent},
    {path: "sesiones", component: SesionesViewComponent},
    {path: "sesioncompleta",component: FullSesionComponent},
    {path: "login", component:LoginViewComponent},  
    {path: "**", component: Error404Component }
];
