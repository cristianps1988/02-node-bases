interface Options {
    getAge: (birthdate: string) => number
    getUuid: () => string
}

interface Person {
    name: string,
    birthdate: string
}


export const makeBuildPerson = ({ getAge, getUuid }: Options) => {
    return ({ name, birthdate }: Person) => {
        return {
            id: getUuid(),
            name,
            age: getAge(birthdate)
        }
    }
}
