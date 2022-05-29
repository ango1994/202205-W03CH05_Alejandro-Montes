import { Component } from './component.js';
import { PokemonCard } from './pokemonCard.js';
export class PokemonList extends Component {
    template;
    constructor(selector, pokemons) {
        super();
        this.template = this.createList();
        this.render(selector);
        pokemons.forEach((pokemon) => new PokemonCard('.list', pokemon));
    }
    createList() {
        let html = `<div class="container"><ul class="list">`;
        html += `</ul>
        <div class="buttons">
        <button class="button button-minus" id="atras">Atras</button>
        <button class="button button-plus" id="adelante">Adelante</button>
        </div>
        </div>`;
        return html;
    }
}
