import { http } from "../plugins"

export const getPokemonByIdAsyncAdapter = async (id: number): Promise<string> => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await http.get(url)
    return pokemon.name
}
