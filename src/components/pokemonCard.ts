import { iPokemon } from '../interfaces/pokemon.js';
import { Component } from './component.js';

export class PokemonCard extends Component {
    template: string;
    constructor(selector: string, public pokemon: iPokemon) {
        super();
        this.template = this.createCard();
        this.addRender(selector);
    }

    createCard() {
        let html = `
        <li>
                    <ul>
                        <li>
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png"
                                alt="pokemon"
                            />
                        </li>
                        <li><h2>${this.pokemon.name}</h2></li>
                        <li>Peso: ${this.pokemon.weight}</li>
                        <li>Altura: ${this.pokemon.height}</li>
                        <li>
                            <ul>
                                <li><h3>Tipo:</h3></li>`;

        this.pokemon.types.forEach((el) => {
            html += `<li>${el.type.name}</li>`;
        });

        html += `
                    </ul>
                        </li>
                        <li>
                            <ul>
                                <li><h3>Habilidades</h3></li>`;

        this.pokemon.abilities.forEach((el) => {
            html += `<li>${el.ability.name}</li>`;
        });
        html += `
                            </ul>
                        </li>
                    </ul>
                </li>
        `;
        return html;
    }
}
