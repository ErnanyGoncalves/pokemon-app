import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  pokemons: Pokemon[] = [
    new Pokemon(25, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Kanto", ["Electric"], false, ["Pichu", "Raichu"]),
    new Pokemon(244, "Entei", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", "Johto", ["Fire"], true, []),
    new Pokemon(329, "Vibrava", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png", "Rouen", ["Ground", "Dragon"], false, ["Trapinch", "Flygon"]),
    new Pokemon(25, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Kanto", ["Electric"], false, ["Pichu", "Raichu"]),
    new Pokemon(244, "Entei", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", "Johto", ["Fire"], true, []),
    new Pokemon(329, "Vibrava", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png", "Rouen", ["Ground", "Dragon"], false, ["Trapinch", "Flygon"]),
  ]
  pokeName: string = "";
  p: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
