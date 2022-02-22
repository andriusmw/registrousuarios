import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario : Usuario = {
    id: 1,
    name: 'Windstorm',
    surname: 'Snow'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
