import { Component } from '@angular/core';
import { DtoPsicologo } from '../../dtos/DtoPsicologo';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

  constructor() {
    const psicologoPrueba: DtoPsicologo = {
      id: 1,
      password: "123",
      usuario: "hello world"
    };
    sessionStorage.setItem("psicologo", JSON.stringify(psicologoPrueba));
  }

}
