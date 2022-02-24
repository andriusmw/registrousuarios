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
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {usuarios};
  }

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
