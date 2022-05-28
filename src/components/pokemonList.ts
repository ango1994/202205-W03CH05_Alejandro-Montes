import { iPokemon } from '../interfaces/pokemon.js';
import { Component } from './component.js';
import { PokemonCard } from './pokemonCard.js';

export class PokemonList extends Component {
    template: string;
    constructor(selector: string, pokemons: Array<iPokemon>) {
        super();
        this.template = this.createList();
        this.render(selector);
        pokemons.forEach((pokemon) => new PokemonCard('.list', pokemon));
    }

    createList() {
        let html = `<div class="container"><ul class="list">`;
        html += `</ul>
        <div class="buttons">
        <button class="button button-minus" id="atras">atras</button>
        <button class="button button-plus" id="adelante">Adelante</button>
        </div>
        </div>`;
        return html;
    }
}
