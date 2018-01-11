"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var pokemon_1 = require("./pokemon");
var mock_pokemons_1 = require("./mock-pokemons");
//import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
var AppComponent = (function () {
    function AppComponent() {
        this.pokemons = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemons_1.POKEMONS;
    };
    ;
    AppComponent.prototype.selectPokemon = function (pokemon) {
        console.log("vous avez selectionné" + pokemon_1.Pokemon.name);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pokemon-app',
        template: "<!-- Barre de navigation -->\n\t<nav>\n\t<div class=\"nav-wrapper teal\">\n\t<a href=\"#\" class=\"brand-logo center\">pokemon-app</a>\n\t</div>\n\t</nav>\n\t\n\t<!-- Contenu des composants -->\n\t<router-outlet></router-outlet>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map