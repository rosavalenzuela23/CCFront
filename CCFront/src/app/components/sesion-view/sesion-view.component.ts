import { Component } from '@angular/core';
import { DtoProblema } from '../../dtos/DtoProblema';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtoSesion } from '../../dtos/DtoSesion';
import { DtoComentarioSesion } from '../../dtos/DtoComentarioSesion';
import { SesionService } from '../../services/sesion.service';
import { PacienteService } from '../../services/PacienteService';
import { PsicologoService } from '../../services/psicologo.service';

@Component({
  selector: 'app-sesion-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sesion-view.component.html',
  styleUrl: './sesion-view.component.css',
})
export class SesionViewComponent {



  // comienza problemas
  intensidadElement = new FormControl('');
  frecuenciaElement = new FormControl('');
  amigosElement = new FormControl('');
  familiarElement = new FormControl('');
  laboralElement = new FormControl('');
  parejaElement = new FormControl('');
  saludElement = new FormControl('');
  espiritualElement = new FormControl('');
  economicoElement = new FormControl('');
  descripcionProblema = new FormControl('');
  // termina problemas

  // Comienza comentarios sesion

  numeroSesion = new FormControl('');
  fechaComentario = new FormControl('');
  aspectoAMedir = new FormControl('');
  inicioElement = new FormControl('');
  finElement = new FormControl('');

  // Termina comentario sesion

  constructor(
    private sesionService: SesionService,
    private pacienteService: PacienteService,
    private psicologoService: PsicologoService
  ){}

  private getNumberFormControl (formControl: FormControl): number {
    let toReturn = formControl.value || 0;
    
    if (typeof toReturn == "string") {
      toReturn = parseInt(toReturn)
    }

    return toReturn;
  }

  private obtenerProblemas(): DtoProblema[] {
    const problemas: DtoProblema[] = [];
    
    let frecuencia = this.frecuenciaElement.value || "";


    const intensidad = this.getNumberFormControl(this.intensidadElement);
    const salud = this.getNumberFormControl(this.saludElement);
    const pareja = this.getNumberFormControl(this.parejaElement);
    const laboral = this.getNumberFormControl(this.laboralElement);
    const familiar = this.getNumberFormControl(this.familiarElement);
    const amigos = this.getNumberFormControl(this.amigosElement);
    const espiritual = this.getNumberFormControl(this.espiritualElement);
    const economico = this.getNumberFormControl(this.economicoElement);
    

    const problema: DtoProblema = {
      intensidad: intensidad,
      frecuencia: frecuencia,
      afectacionAmigos: amigos,
      afectacionFamiliar: familiar,
      afectacionLaboral: laboral,
      afectacionPareja: pareja,
      afectacionSalud: salud,
      afectacionEconomico: economico,
      afectacionEspiritual: espiritual,
      descripcion: this.descripcionProblema.value || '',
      id: null
    }

    problemas.push(problema)

    return problemas;
  }

  private obtenerComentariosSesion(): DtoComentarioSesion[] {

    const comentario: DtoComentarioSesion = {
      id: null,
      fecha: this.fechaComentario.value || new Date().toString(),
      aspectoAMedir: this.aspectoAMedir.value || '',
      numeroSesion: this.numeroSesion.value || 'X',
      fin: this.getNumberFormControl(this.finElement),
      inicio: this.getNumberFormControl(this.inicioElement)
    }

    const comentarios: DtoComentarioSesion[] = [];

    comentarios.push(comentario);

    return comentarios;
  }

  private obtenerInformacionSesion(): DtoSesion {

    const listaProblemas = this.obtenerProblemas();
    const comentariosSesion = this.obtenerComentariosSesion();

    const sesion: DtoSesion = {
      comentariosSesion: comentariosSesion,
      id: null,
      problemasSesion: listaProblemas,
      psicologo: this.psicologoService.getPsicologoActual(),
      expediente: this.pacienteService.getExpedienteActual()
    }


    return sesion;
  }

  terminarSesion() {
    const sesion = this.obtenerInformacionSesion();
    this.sesionService.guardarSesion(sesion);
  }

}
