import { Component, signal } from '@angular/core';

import { PokemonList } from './pokemon-list/pokemon-list';

@Component({
  imports: [PokemonList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pokemon-app');
}
