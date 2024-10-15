import { Routes } from '@angular/router';
import {GestionViewComponent} from "./components/gestion-view/gestion-view.component";
import {MainViewComponent} from "./components/main-view/main-view.component";

export const routes: Routes = [
    {path: "", component: MainViewComponent},
    {path: "gestion", component: GestionViewComponent},
    {path: "sesion", component:SesionViewComponent},
    {path: "expediente", component: ExpedienteViewComponent},
    {path: "sesiones/:id", component: SesionesViewComponent}
];
