import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ShadowCardDirective } from './shadow-card.directive'; // importez la directive
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [  AppComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }