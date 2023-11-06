const { http } = require('../plugins')

const getPokemonByIdAsyncAdapter = async (id) => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await http.get(url)
    return pokemon.name
}

module.exports = {
    getPokemonByIdAsyncAdapter
}
