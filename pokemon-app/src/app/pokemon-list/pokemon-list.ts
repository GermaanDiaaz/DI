import { Component } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon.interface';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Planta / Veneno',
    urlPhoto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    id: 2,
    name: 'Charmander',
    type: 'Fuego',
    urlPhoto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  },
  {
    id: 3,
    name: 'Squirtle',
    type: 'Agua',
    urlPhoto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
  },
];

@Component({
  imports: [PokemonItem], // <-- Añadido PokemonItem aquí
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList = POKEMONS;
}