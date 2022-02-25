import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { USUARIOS } from '../mock-usuarios';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(
    private usuarioService: UsuarioService,
  ) { }
/*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.usuarioService.addUsuario({ name } as Usuario)
      .subscribe(usuario => {
        this.usuarios.push(usuario);
      });
  }
  //Función para añadir usuario con nombre SOLAMENTE.

*/

add(name: string, surname: string): void {
  name = name.trim();
  surname =surname.trim();
  if (!name && !surname) { return; }
  this.usuarioService.addUsuario({ name,surname } as Usuario)
    .subscribe(usuario => {
      this.usuarios.push(usuario);
    });

//Función para añadir usuario con nombre y apellido(name  y surname)


}



  ngOnInit(): void {
  }

}
