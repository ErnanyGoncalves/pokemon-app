import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon[];
 
  constructor() { }

  ngOnInit() {
  }

}
