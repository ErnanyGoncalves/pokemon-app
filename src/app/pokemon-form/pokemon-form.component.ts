import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Output() pokemonComponent = new EventEmitter<string>();

  types: string[] = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"];

  constructor() { }

  ngOnInit() {
  }

  toComponent(component: string) {
    this.pokemonComponent.emit(component);
  }

}
