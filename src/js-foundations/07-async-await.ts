
export const getPokemonByIdAsync = async (id: number): Promise<string> => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)

    const resp = await fetch(url)
    const data = await resp.json()

    return data.name
}
