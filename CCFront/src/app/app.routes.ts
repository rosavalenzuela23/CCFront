import { Routes } from '@angular/router';
import {GestionViewComponent} from "./components/gestion-view/gestion-view.component";
import {MainViewComponent} from "./components/main-view/main-view.component";

export const routes: Routes = [
    {path: "", component: MainViewComponent},
    {path: "gestion", component: GestionViewComponent}
    
];
