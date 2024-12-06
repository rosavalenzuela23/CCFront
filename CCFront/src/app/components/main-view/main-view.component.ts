import { Component } from '@angular/core';
import { DtoPsicologo } from '../../dtos/DtoPsicologo';
import { SessionStorageNames } from '../../services/sessionStorageNames';
import { ActivatedRoute } from '@angular/router';
import { StompserviceService } from '../../services/stompservice.service';
import { DtoEmpleado } from '../../dtos/DtoEmpleado';
import { PacienteService } from '../../services/PacienteService';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

  empleado: string = "";

  constructor(
    private route: ActivatedRoute,
    private stomp: StompserviceService,
    private pacienteService: PacienteService
  ) {
    
  }

  ngOnInit(): void {
    this.empleado = sessionStorage.getItem(SessionStorageNames.TOKEN) || "";
    
    //generar la conexion con el stomp en base a el rol
    const empleadoCompletoJson = sessionStorage.getItem(SessionStorageNames.USUARIO_ACTUAL) || "{}";
    const dto: DtoEmpleado = JSON.parse(empleadoCompletoJson);
    
    this.stomp.generar();    
    this.stomp.conectar(
      () => {
        
        alert(`se conecto con el ${this.empleado}!`);

        //si es psicologo tiene que crear una cola para si mismo
        //si es el recepcionista o el administrador no va a hacer nada
        if(this.empleado != 'Psicologo') {
          return;
        }

        const headers = {
          durable: false,
          autoDelete: true,
          exclusive: false
        }

        this.stomp.subscribe(`/queue/${dto.usuario}`, (message: any) => {
          const paciente = JSON.parse(message.body);
          this.pacienteService.setPaciente(paciente);
        }, headers);

      }
    )


  }

}
