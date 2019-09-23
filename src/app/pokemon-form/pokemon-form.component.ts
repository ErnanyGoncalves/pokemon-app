import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpPokemonBdService } from '../http-pokemon-bd.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types: string[] = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"];

  // evolutions = [{ number: 25, name: 'Ernany' },{ number: 26, name: 'Daniel' }];
  evolutions: { 'number': number, 'string': string }[] = [];

  isOnEditMode: boolean = false;

  pokemon = {};

  constructor(private reqPokemon: HttpPokemonBdService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.formMode === "edit") {
      this.reqPokemon.getPokemon(this.route.snapshot.params.number).subscribe(pokemon => {
        this.pokemon = pokemon;
        console.log(this.pokemon);
      });
      this.isOnEditMode = true;
    } else {
      this.pokemon = {};
    }
  }

  registerPokemon(pokemonForm: NgForm) {
    console.log(pokemonForm.value);
  }

  editPokemon(pokemonForm: NgForm) {
    console.log(pokemonForm.value);
  }

  addEvolution(pokemonEvolution) {
    console.log(pokemonEvolution);
    this.evolutions.push(pokemonEvolution);
    this.evolutions.sort((a, b) => {
      if (a.number > b.number) return 1;
      if (a.number < b.number) return -1;
      else return 0;
    });
  }

  removeEvolution(evolutionArrId) {
    this.evolutions.splice(evolutionArrId,1);
  }

}
