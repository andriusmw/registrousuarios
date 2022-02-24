import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  getUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.messageService.add('UsuarioService: fetched USUARIOS');
    return usuarios;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`UsuarioService: ${message}`);
}


  constructor(private messageService: MessageService,
    private http: HttpClient,

    )  { }
}
