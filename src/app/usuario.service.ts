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


/** GET heroes from the server */
getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.usuariosUrl)
  //Recibe la lista de usuarios de la API en vez de del mock.
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`UsuarioService: ${message}`);
}
private usuariosUrl = 'api/usuarios';  // URL to web api

  constructor(private messageService: MessageService,
    private http: HttpClient,


    )  { }
}
