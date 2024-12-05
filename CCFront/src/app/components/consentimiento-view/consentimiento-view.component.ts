import { Component } from '@angular/core';
import { CartaPacienteComponent } from './carta-paciente/carta-paciente.component';
import { PacienteService } from '../../services/PacienteService';
import { Observable } from 'rxjs';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-consentimiento-view',
  standalone: true,
  imports: [CartaPacienteComponent, AsyncPipe],
  templateUrl: './consentimiento-view.component.html',
  styleUrl: './consentimiento-view.component.css'
})
export class ConsentimientoViewComponent {

  listaPacientes$!: Observable<DtoPaciente[]>;

  constructor(
    private pacienteService: PacienteService
  ){}

  ngOnInit() {
    this.listaPacientes$ = this.pacienteService.obtenerPacientesSinCarta();
  }

}
