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

*/

add(name: string, surname: string): void {
  name = name.trim();
  surname =surname.trim();
  if (!name) { return; }
  this.usuarioService.addUsuario({ name } as Usuario)
    .subscribe(usuario => {
      this.usuarios.push(usuario);
    });
    if (!surname) { return; }
    this.usuarioService.addUsuario({ surname } as Usuario)
      .subscribe(usuario => {
        this.usuarios.push(usuario);
      });



}



  ngOnInit(): void {
  }

}
