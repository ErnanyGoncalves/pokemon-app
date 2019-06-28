import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
