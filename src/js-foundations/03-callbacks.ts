interface User {
    id: number
    name: string
}

const users: User[] = [
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

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
    const user = users.find(user => user.id === id)
    if (!user) return callback(`Can´t find a user with id: ${id}`)
    callback(undefined, user)
}

