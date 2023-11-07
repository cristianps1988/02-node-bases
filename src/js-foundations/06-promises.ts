
export const getPokemonById = (id: number): Promise<string> => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(pokemon => pokemon.name)
}
