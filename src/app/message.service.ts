import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    /*---------------------------*/

  window.alert("Usuario añadido con éxito");

/*---------------------------*/
  }

  clear() {
    this.messages = [];
  }
}
