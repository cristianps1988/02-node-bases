const axios = require('axios');

const httpClientPlugin = {
    // get: async (url) => {
    //     const resp = await fetch(url)
    //     return await resp.json()
    // }

    // cambiando el fetch a axios
    get: async (url) => {
        const { data } = await axios.get(url)
        return data
    }
}

module.exports = {
    http: httpClientPlugin
}