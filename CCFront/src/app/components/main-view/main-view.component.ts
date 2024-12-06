import { Component } from '@angular/core';
import { DtoPsicologo } from '../../dtos/DtoPsicologo';
import { SessionStorageNames } from '../../services/sessionStorageNames';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

  empleado: string = "";

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.empleado = sessionStorage.getItem(SessionStorageNames.TOKEN) || "";
    
  }

}
