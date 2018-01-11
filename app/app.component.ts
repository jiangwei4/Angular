import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
//import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
	selector: 'pokemon-app',
	template: `<!-- Barre de navigation -->
	<nav>
	<div class="nav-wrapper teal">
	<a href="#" class="brand-logo center">pokemon-app</a>
	</div>
	</nav>
	
	<!-- Contenu des composants -->
	<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit{
	pokemons:Pokemon[]=null;
	ngOnInit(){
		this.pokemons=POKEMONS;
	};
	selectPokemon(pokemon: Pokemon){
		console.log("vous avez selectionné"+Pokemon.name);
	}
};

