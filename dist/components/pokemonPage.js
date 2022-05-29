import { Component } from './component.js';
export class PokemonPage extends Component {
    pokemon;
    template;
    constructor(selector, pokemon) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = `
        
                    <ul class="card">
                        <li>
                            <a href = "./pokemondetails.html?=${this.pokemon.id}" class= "image"><img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png"
                                alt="pokemon"
                            />
                            </a>
                        </li>
                        <li><h2>${this.pokemon.name.toUpperCase()}</h2></li>
                        <li>Peso: <span>${this.pokemon.weight / 10} kg</span></li>
                        <li>Altura: ${this.pokemon.height * 10} cm</li>
                        <li>
                        <div class="stats">
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
                </div>
                
        `;
        return html;
    }
}
