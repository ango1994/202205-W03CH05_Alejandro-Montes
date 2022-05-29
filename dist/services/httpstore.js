export class HttpStore {
    url;
    constructor(url) {
        this.url = url;
    }
    getPokemon(pokemonId) {
        return fetch(this.url + pokemonId).then((response) => {
            return response.json();
        });
    }
}
