import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
