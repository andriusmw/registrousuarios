import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { USUARIOS } from '../mock-usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  selectedUsuario?: Usuario;
  //Hay que poner el interrogante porque puede no ser llamado.


  usuarios = USUARIOS;
  //Creo una variable llamada usuarios y le paso el valor, contenido y tipo del array USUARIOS del mock mock-usuarios

  usuario : Usuario = {
    id: 1 ,
    name: "windstorm",
    surname: "Snow"
  }
  //Creo una variable llamada usuario, de tipo objeto que va a tener el contenido y estructura de Usuario. Que lo saco de la interfaz

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(usuario: Usuario): void {
    this.selectedUsuario = this.usuario;
  }
  //Aquí se declara el método onSelect para que funcione selectedUsuario
}
