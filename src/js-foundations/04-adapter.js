const { getAge, getUuid } = require('../plugins')


const buildPerson = ({ name, birthdate }) => {
    return {
        // id: new Date().getTime(),
        id: getUuid(),
        name,
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAge(birthdate)
    }
}

const obj = {
    name: 'John',
    birthdate: '1988-02-07'
}

console.log(buildPerson(obj));