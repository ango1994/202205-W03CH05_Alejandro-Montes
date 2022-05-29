import { index } from '../page/index.js';
import { pokemonDetails } from '../page/pokemondetails.js';
(() => {
    const path = location.pathname.split('/');
    if (path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html') {
        document.addEventListener('DOMContentLoaded', index);
    }
    else if (path[path.length - 1] === 'pokemondetails.html') {
        document.addEventListener('DOMContentLoaded', pokemonDetails);
    }
})();
