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
    this.selectedUsuario = usuario;
  }
  //Aquí se declara el método onSelect para que funcione selectedUsuario
  //El fallo que machaba la vista detalles era la linea 34 que estaba mal escrita, ponia
  //this-selectedUsuario = this.usuario ; eso por algún motivo no hacía nada, porque lo que queríamos era
  // pasar los valores de selectedUsuario a la variable usuario, y digamos que se lo estábamos pasando a otra variable distinta.
  //Por tema de scope
}
