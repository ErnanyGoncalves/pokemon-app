import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPokemonBdService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000";

  getPokemons(){
    return this.httpClient.get(this.url+"/pokemon");
  }

  getPokemon(pokemonNumber:number){
    console.log(this.url+"/pokemon/"+pokemonNumber);
    return this.httpClient.get(this.url+"/pokemon/"+pokemonNumber);
  }


}
