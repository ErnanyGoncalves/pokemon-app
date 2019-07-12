import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  @Output() pokemonComponent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toComponent(component: string) {
    this.pokemonComponent.emit(component);
  }

}
