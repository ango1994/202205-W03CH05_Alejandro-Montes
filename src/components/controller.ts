import { iPokemon } from '../interfaces/pokemon.js';
import { HttpStore } from '../services/httpstore.js';
import { PokemonList } from './pokemonList.js';

export class Controller {
    startIndex: number;
    constructor() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises: Array<Promise<iPokemon>> = [];
        this.startIndex = 1;
        for (let i = this.startIndex; i < this.startIndex + 20; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then(
            (pokemon) => new PokemonList('.main', pokemon)
        );
    }
}
