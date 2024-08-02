
//const { emailTemplate } = require('./js-foundations/01-templates')
//require('./js-foundations/02-destructuring')
// require('./js-foundations/04-adapter')


//console.log(emailTemplate)

// const { getUserById } = require('./js-foundations/03-callbacks')

// const id = 3

// getUserById(id, (error, user) => {
//     if (error) throw new Error(error)
//     console.log(user)
// })



// factory
// const { getAge, getUuid } = require('./plugins')
// const { makeBuildPerson } = require('./js-foundations/05-factory')

// const obj = {
//     name: 'John',
//     birthdate: '1988-02-07'
// }

// const makePerson = makeBuildPerson({ getAge, getUuid })

// const jhon = makePerson(obj)

// console.log(jhon)


// promises
// const { getPokemonById } = require('./js-foundations/06-promises')

// getPokemonById(1)
//     .then(pokemon => console.log({ pokemon }))
//     .catch(error => console.log({ error }))
//     .finally(() => console.log('Finalizado'))


// async-await
// const { getPokemonByIdAsync } = require('./js-foundations/07-async-await')

// getPokemonByIdAsync(1)
//     .then(pokemon => console.log({ pokemon }))
//     .catch(error => console.log({ error }))
//     .finally(() => console.log('Finalizado'))


// async-await-adapter
// const { getPokemonByIdAsyncAdapter } = require('./js-foundations/08-async-await-adapter')

// getPokemonByIdAsyncAdapter(1)
//     .then((pokemon: string) => console.log({ pokemon }))
//     .catch((error: string) => console.log({ error }))
//     .finally(() => console.log('Finalizado'))

// logger
// import { buildLoger } from './plugins'

// const logger = buildLoger('index.ts')

// logger.log('Holis')

// logger.error('Esto es un error')