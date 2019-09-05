import { Component, OnInit } from '@angular/core';
import { HttpPokemonBdService } from '../http-pokemon-bd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  pokemon = {};
  number: number;
  constructor(private reqPokemon: HttpPokemonBdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.number = this.route.snapshot.params["number"];
    this.reqPokemon.getPokemon(this.number).subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
    });
  }

  toForm() {
    this.router.navigate(["/pokemon", "admin", this.number], { queryParams: { formMode: 'edit' } });
  }

}
