export class HttpStorePokemons {
    url;
    constructor(url) {
        this.url = url;
    }
    getPokemon() {
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
}
