import { animales } from '../../src/js-foundations/02-destructuring'

describe('js-foundations/02-destructuring.ts', () => {
    test('animales should contain pescado', () => {
        expect(animales).toContain('pescado')
    });

    test('first animal must to be perro, and second gato', () => {
        const [dog, cat] = animales;
        expect(dog).toBe('perro');
        expect(cat).toBe('gato');
    })
});