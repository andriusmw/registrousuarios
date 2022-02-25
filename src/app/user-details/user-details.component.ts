import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioService } from '../usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() usuario?: Usuario;



  constructor(
   // private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) { }

  save(): void {
    if (this.usuario) {
      this.usuarioService.updateHero(this.usuario)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
  }

}
