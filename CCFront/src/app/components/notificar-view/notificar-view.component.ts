import { Component } from '@angular/core';
import { DtoPaciente } from '../../dtos/DtoPaciente';
import { PacienteService } from '../../services/PacienteService';
import { DtoPsicologo } from '../../dtos/DtoPsicologo';
import { StompserviceService } from '../../services/stompservice.service';
import { Observable } from 'rxjs';
import { PsicologoService } from '../../services/psicologo.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notificar-view',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './notificar-view.component.html',
  styleUrl: './notificar-view.component.css'
})
export class NotificarViewComponent {

    pacientes$!: Observable<DtoPaciente[]>;
    psicologos$!: Observable<DtoPsicologo[]>;

    listaPacientes: DtoPaciente[] = [];
    listaDePsicologos: DtoPsicologo[] = [];

    constructor(
        private pacienteServie: PacienteService,
        private psicologoService: PsicologoService,
        private stompService: StompserviceService
    ){}

    ngOnInit() {
        //conseguir a todos los psicologos
        this.pacientes$ = this.pacienteServie.obtenerTodosLosPacientes();
        //conseguir a todos los pacientes
        this.psicologos$ = this.psicologoService.obtenerTodos();
        
        this.psicologos$.subscribe({
            next: (res) => {
                this.listaDePsicologos = res;
            },
            error: (error) => {
                throw error;
            }
        });

    }

    avisarPsicologo(idaBuscar: string, paciente: DtoPaciente) {
        const select = document.getElementById(idaBuscar) as HTMLSelectElement;
        const psicologo = select.value;
        const headers = {
            durable: false,
            autoDelete: true,
            exclusive: false,
        };
       this.stompService.sendMessage(
        `/queue/${psicologo}`, JSON.stringify(paciente), headers
       );
       alert('Mensaje enviado');
    }

}
