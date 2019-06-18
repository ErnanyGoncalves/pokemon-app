import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { AppControllerComponent } from './app-controller/app-controller.component';
import { FiltersComponent } from './pokemon-data/filters/filters.component';
import { PaginationComponent } from './pokemon-data/pagination/pagination.component';
import { PokemonListComponent } from './pokemon-data/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-data/pokemon-list/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonDataComponent,
    AppControllerComponent,
    FiltersComponent,
    PaginationComponent,
    PokemonListComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
