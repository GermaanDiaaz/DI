import { Component, Input } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon.interface';

@Component({
  imports: [],
  selector: 'app-pokemon-item',
  styleUrl: './pokemon-item.css',
  templateUrl: './pokemon-item.html',
})
export class PokemonItem {
  @Input() pokemon!: Pokemon;
}