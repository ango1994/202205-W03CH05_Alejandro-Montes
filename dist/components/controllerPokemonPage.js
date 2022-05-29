import { HttpStore } from '../services/httpstore.js';
export class ControllerPokemonPage {
    startIndex;
    constructor() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        this.startIndex = 1;
        for (let i = this.startIndex; i < this.startIndex + 12; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokemonList('.main', pokemon);
            this.manageComponent();
        });
    }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        if (ev.target.id === 'adelante') {
            this.startIndex += 12;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
        else if (ev.target.id === 'atras' &&
            this.startIndex >= 13) {
            this.startIndex -= 12;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
        this.updateComponent();
    }
    updateComponent() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        for (let i = this.startIndex; i < this.startIndex + 12; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokemonList('.main', pokemon);
            this.manageComponent();
        });
    }
}
