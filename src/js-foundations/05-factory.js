
const makeBuildPerson = ({ getAge, getUuid }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    makeBuildPerson
}