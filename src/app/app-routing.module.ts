import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsuarioSearchComponent } from './usuario-search/usuario-search.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'detail/{{usuario.id}}', component: UserDetailsComponent },
  { path: 'search', component: UsuarioSearchComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
