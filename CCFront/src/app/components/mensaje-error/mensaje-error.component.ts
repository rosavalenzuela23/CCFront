import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast } from 'bootstrap';


@Component({
  selector: 'app-mensaje-error',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-error.component.html',
  styleUrl: './mensaje-error.component.css'
})
export class MensajeErrorComponent {

  @Input() title = '';
  @Input() message = '';
  @Input() idComponente = '';

  private toast: Toast | undefined;

  constructor() {
    
  }

  async ngAfterViewInit() {
    console.log(this.idComponente);

    let liveToastElement: HTMLElement | undefined = undefined

    liveToastElement = document.getElementById(this.idComponente) as HTMLElement;

    const toast: Toast = Toast.getOrCreateInstance(liveToastElement);

    console.log(liveToastElement);
    console.log(toast);
    
    toast.show()
  }

}
