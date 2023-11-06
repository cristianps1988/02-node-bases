
const getPokemonById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(pokemon => pokemon.name)
}

module.exports = {
    getPokemonById
}