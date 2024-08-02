
const { SHELL, PWD } = process.env; // destructuring de objetos

export const animales: string[] = ['perro', 'gato', 'pescado']

const [, , pez] = animales // destructuring de arrays
console.log({ SHELL, PWD })
console.log(pez)