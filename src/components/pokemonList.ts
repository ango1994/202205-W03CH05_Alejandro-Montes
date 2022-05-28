import { iPokemon } from '../interfaces/pokemon.js';
import { Component } from './component.js';
import { PokemonCard } from './pokemonCard.js';

export class PokemonList extends Component {
    template: string;
    constructor(selector: string, pokemons: Array<iPokemon>) {
        super();
        this.template = this.createList();
        this.addRender(selector);
        pokemons.forEach((pokemon) => new PokemonCard('.list', pokemon));
    }

    createList() {
        let html = `<ul class="list">`;
        html += `</ul>`;
        return html;
    }
}
