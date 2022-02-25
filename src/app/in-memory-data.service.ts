import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //Simula una base de datos a la que atacar
    const usuarios = [
      { id: 11, name: 'Dr Nice', surname: 'Dr Nice'},
  { id: 12, name: 'Narco', surname: "spider" },
  { id: 13, name: 'Bombasto', surname: "oritrón" },
  { id: 14, name: 'Celeritas', surname:"Dapillah" },
  { id: 15, name: 'Magneta', surname: "Ontto" },
  { id: 16, name: 'RubberMan', surname:"Ontta" },
  { id: 17, name: 'Dynama' , surname:"Parker"},
  { id: 18, name: 'Dr IQ', surname: "Williams" },
  { id: 19, name: 'Magma', surname:"BA" },
  { id: 20, name: 'Tornado',surname:"2" }
    ];
    return {usuarios};
  }
  //el valor surname no lo hemos declarado en esta const usuarios, por eso no aparece en
  //la página web. hay que crearlo aquí ya que ya no llama al mock, sino a la api, a esta const usuarios.

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuarios: Usuario[]): number {
    return usuarios.length > 0 ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 11;
  }
}

//The in-memory-data.service.ts file will take over the function of mock-heroes.ts. However,
//don't delete mock-heroes.ts yet, as you still need it for a few more steps of this tutorial.
//
//When the server is ready, you'll detach the In-memory Web API, and the application's requests
 //will go through to the server.
