const { getAge } = require('./get-age.plugin')
const { getUuid } = require('./get-id.plugin')
const { http } = require('./http-client.plugin')


module.exports = {
    getAge,
    getUuid,
    http
}