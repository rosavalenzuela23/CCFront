import { Routes } from '@angular/router';
import {GestionViewComponent} from "./components/gestion-view/gestion-view.component";
import {MainViewComponent} from "./components/main-view/main-view.component";
import { ExpedienteViewComponent } from './components/expediente-view/expediente-view.component';
import {SesionesViewComponent} from "./components/sesiones-view/sesiones-view.component";

export const routes: Routes = [
    {path: "", component: MainViewComponent},
    {path: "gestion", component: GestionViewComponent},
    {path: "expediente", component: ExpedienteViewComponent},
    {path: "sesiones/:id", component: SesionesViewComponent}
];
