import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class StompserviceService {

  private client: Stomp.Client | undefined;
  connected: boolean = false;
  private user: string | undefined;
  private pass: string | undefined;

  constructor() { }
  
  generar(user = 'guest', pass = 'guest', host = 'ws://localhost:15674/ws') {
    if(this.client != undefined) return;
    
    this.user = user;
    this.pass = pass;
    const websocket = new WebSocket(host);
    this.client = Stomp.over(websocket);
  }

  conectar(connectionCallback?: any, errorCallback?: any) {
    if (this.client === undefined) {
      throw Error("El cliente aun no ha sido generado");
    }
    
    const on_connect = () => {
      this.connected = true;
      if (connectionCallback) connectionCallback();
    }

    const on_error = () => {
      console.log("ERROR AL CONECTAR");
      if(errorCallback) errorCallback();
    }

    this.client.connect(
      this.user!,
      this.pass!,
      on_connect,
      on_error
    );

  }

  subscribe(queue: string, callback: any, headers?: {}) {
    if (!this.connected) {
      throw new Error("El socket no esta conectado");
    }

    this.client?.subscribe(queue, callback, headers);
  }

  sendMessage(queue: string, message: string, headers?: {}) {
    if (!this.connected) {
      throw new Error("El socket no esta conectado");
    }
    
    this.client?.send(queue, headers, message);
  }

  desconectar() {
    if(!this.connected) {
      return;
    }

    this.client?.disconnect(() => {
      this.client = undefined;
      console.log('Desconexion realizada con exito');
    });
  }


}
