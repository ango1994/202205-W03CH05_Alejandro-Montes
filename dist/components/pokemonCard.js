import { Component } from './component.js';
export class PokemonCard extends Component {
    pokemon;
    template;
    constructor(selector, pokemon) {
        super();
        this.pokemon = pokemon;
        this.template = this.createCard();
        this.addRender(selector);
    }
    createCard() {
        const html = `
        <li class ="pokecard">
                    <ul>
                        <li>
                            <a href = "./pokemondetails.html?=${this.pokemon.id}" class= "image"><img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png"
                                alt="pokemon"
                            />
                            </a>
                        </li>
                        <li><h2>${this.pokemon.name.toUpperCase()}</h2></li>`;
        return html;
    }
}
