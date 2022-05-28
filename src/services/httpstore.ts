/* eslint-disable no-useless-constructor */
import { iPokemon } from '../interfaces/pokemon.js';

export class HttpStore {
    constructor(public url: string) {}

    getPokemon(pokemonId: number): Promise<iPokemon> {
        return fetch(this.url + pokemonId).then((response) => {
            return response.json();
        });
    }
}
