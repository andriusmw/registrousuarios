import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { AppRoutingModule } from '../app-routing.module';


import { Usuario } from '../usuario';

import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: [ './usuario-search.component.css' ]
})
export class UsuarioSearchComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  private searchTerms = new Subject<string>();

  constructor(private usuarioService: UsuarioService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }



  ngOnInit(): void {
    this.usuarios$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.usuarioService.searchUsuarios(term)),
    );
  }


}
