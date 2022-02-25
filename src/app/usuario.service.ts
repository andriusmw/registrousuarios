import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; //añadiendo manejo de errores

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


/** GET heroes from the server */
getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.usuariosUrl)
  .pipe(
    catchError(this.handleError<Usuario[]>('getUsuarios', []))
  //Recibe la lista de usuarios de la API en vez de del mock.
  );}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`UsuarioService: ${message}`);
}
private usuariosUrl = 'api/usuarios';  // URL to web api

/** GET hero by id. Will 404 if id not found */
getUsuario(id: number): Observable<Usuario> {
  const url = `${this.usuariosUrl}/${id}`;
  return this.http.get<Usuario>(url).pipe(
    tap(_ => this.log(`fetched user id=${id}`)),
    catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
  );
}

  constructor(private messageService: MessageService,
    private http: HttpClient,


    )  { }
}
