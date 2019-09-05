import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { FiltersComponent } from './pokemon-data/filters/filters.component';
import { PaginationComponent } from './pokemon-data/pagination/pagination.component';
import { PokemonItemComponent } from './pokemon-data/pokemon-item/pokemon-item.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { HttpPokemonBdService } from './http-pokemon-bd.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const pokemonRoutes: Routes = [
  { path: '', component: PokemonDataComponent },
  { path: 'pokemon/admin', component: PokemonFormComponent },
  { path: 'pokemon/admin/:number', component: PokemonFormComponent }, //formMode: edit
  { path: 'pokemon/:number', component: PokemonInfoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonDataComponent,
    FiltersComponent,
    PaginationComponent,
    PokemonItemComponent,
    PokemonFormComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgxPaginationModule,
    // Ng2SearchPipeModule,
    RouterModule.forRoot(pokemonRoutes)
  ],
  providers: [HttpPokemonBdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
