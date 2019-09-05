import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { HttpPokemonBdService } from '../http-pokemon-bd.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss']
})
export class PokemonDataComponent implements OnInit {

  // pokemons: Pokemon[] = [
  //   new Pokemon(25, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Kanto", ["Electric"], false, ["Pichu", "Raichu"]),
  //   new Pokemon(244, "Entei", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", "Johto", ["Fire"], true, []),
  //   new Pokemon(329, "Vibrava", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png", "Rouen", ["Ground", "Dragon"], false, ["Trapinch", "Flygon"]),
  //   new Pokemon(25, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Kanto", ["Electric"], false, ["Pichu", "Raichu"]),
  //   new Pokemon(244, "Entei", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", "Johto", ["Fire"], true, []),
  //   new Pokemon(329, "Vibrava", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png", "Rouen", ["Ground", "Dragon"], false, ["Trapinch", "Flygon"]),
  // ]
  pokemons = {}; //TENTAR CONVERTER O JSON PRA ARRAY E TENTAR UTILIZAR O MODEL JA CRIADO

  constructor(private reqPokemon: HttpPokemonBdService) { }

  ngOnInit() {
    this.reqPokemon.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

}
