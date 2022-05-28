/* eslint-disable no-new */
import { iPokemon } from '../interfaces/pokemon.js';
import { HttpStore } from '../services/httpstore.js';
import { PokemonList } from './pokemonList.js';

export class Controller {
    startIndex: number;
    constructor() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises: Array<Promise<iPokemon>> = [];
        this.startIndex = 1;
        for (let i = this.startIndex; i < this.startIndex + 12; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokemonList('.main', pokemon);
            this.manageComponent();
        });
    }

    private manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }

    private handlerButton(ev: Event) {
        if ((<HTMLElement>ev.target).id === 'adelante') {
            this.startIndex += 12;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else if (
            (<HTMLElement>ev.target).id === 'atras' &&
            this.startIndex >= 13
        ) {
            this.startIndex -= 12;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }

        this.updateComponent();
    }

    private updateComponent() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises: Array<Promise<iPokemon>> = [];
        for (let i = this.startIndex; i < this.startIndex + 12; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokemonList('.main', pokemon);
            this.manageComponent();
        });
    }
}
