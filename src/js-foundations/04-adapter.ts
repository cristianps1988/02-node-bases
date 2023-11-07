import { getAge, getUuid } from '../plugins'

interface Person {
    name: string,
    birthdate: string
}

const buildPerson = ({ name, birthdate }: Person) => {
    return {
        // id: new Date().getTime(),
        id: getUuid(),
        name,
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAge(birthdate)
    }
}

const obj: Person = {
    name: 'John',
    birthdate: '1988-02-07'
}

console.log(buildPerson(obj));