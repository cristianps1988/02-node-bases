const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    }
]

const id = 1

const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id)
    if (!user) return callback(`Can´t find a user with id: ${id}`)
    callback(null, user)
}

module.exports = { getUserById }