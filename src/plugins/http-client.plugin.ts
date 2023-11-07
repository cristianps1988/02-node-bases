import axios from 'axios'

export const httpClientPlugin = {
    // get: async (url) => {
    //     const resp = await fetch(url)
    //     return await resp.json()
    // }

    // cambiando el fetch a axios
    get: async (url: string) => {
        const { data } = await axios.get(url)
        return data
    }
}