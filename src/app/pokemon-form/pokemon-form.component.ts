import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpPokemonBdService } from '../http-pokemon-bd.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types: string[] = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"];

  isOnEditMode: boolean = false;

  pokemon = {};

  constructor(private reqPokemon: HttpPokemonBdService ,private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.formMode === "edit") { 
      this.reqPokemon.getPokemon(this.route.snapshot.params.number).subscribe(pokemon => {
        this.pokemon = pokemon;
        console.log(this.pokemon);
      });
      this.isOnEditMode = true;
    }else{
      this.pokemon = {};
    }
  }

}
