import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DtoPaciente } from '../../../dtos/DtoPaciente';
import { PacienteService } from '../../../services/PacienteService';

@Component({
  selector: 'app-carta-paciente',
  standalone: true,
  imports: [],
  templateUrl: './carta-paciente.component.html',
  styleUrl: './carta-paciente.component.css'
})
export class CartaPacienteComponent {

  @Input('pacientedto') paciente!: DtoPaciente;
  @Output() cartaSubida = new EventEmitter();
  private file: File | undefined;

  constructor(
    private pacienteService: PacienteService
  ){}

  private verificarArchivoValido(): boolean {
    return this.file === undefined
  }

  modificarCampoDocumento(evt: any) {
    const file = evt.target.files[0];

    if(file) {
      this.file = file;
    }
  }

  subirCartaDeConcentimiento() {

    if (this.verificarArchivoValido()) {
      return;
    }

    const formData = new FormData();
    formData.append("file", this.file!, this.file!.name);
    formData.append('paciente', JSON.stringify(this.paciente));


    this.pacienteService.subirCartaConcentimiento(formData).subscribe({
      next: () => {
        alert("Subida exitosa");
        this.cartaSubida.emit();
      },
      error: (error: any) => {
        console.log(error);
        alert("Hubo un error al subir el archivo");
      }
    });

  }

}
