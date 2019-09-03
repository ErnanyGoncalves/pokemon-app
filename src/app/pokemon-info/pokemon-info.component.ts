import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpPokemonBdService } from '../http-pokemon-bd.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  @Output() pokemonComponent = new EventEmitter<string>();

  pokemon = {};

  constructor(private reqPokemon: HttpPokemonBdService) { }

  ngOnInit() {
    this.reqPokemon.getPokemon(727).subscribe(pokemon=>{
      this.pokemon = pokemon;
      console.log(this.pokemon);
    });
  }

  toComponent(component: string) {
    this.pokemonComponent.emit(component);
  }

}
