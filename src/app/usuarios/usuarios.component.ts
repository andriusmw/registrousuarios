import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { USUARIOS } from '../mock-usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = USUARIOS;
  //Creo una variable llamada usuarios y le paso el valor, contenido y tipo del array USUARIOS del mock mock-usuarios

  usuario : Usuario = {
    id: 1,
    name: 'Windstorm',
    surname: 'Snow'
  }
  //Creo una variable llamada usuario, de tipo objeto que va a tener el contenido y estructura de Usuario. Que lo saco de la interfaz

  constructor() { }

  ngOnInit(): void {
  }

}
