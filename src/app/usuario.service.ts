import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  getUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.messageService.add('UsuarioService: fetched USUARIOS');
    return usuarios;
  }

  constructor(private messageService: MessageService) { }
}
