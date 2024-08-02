import { getUserById } from '../../src/js-foundations/03-callbacks';

describe('js-foundations/03-callbacks.ts', () => {
    test('getUserById should return error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`Can´t find a user with id: ${id}`);
            expect(user).toBeUndefined();
            done()
        })
    });

    test('getUserById should return user John Doe', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 1, name: "John Doe" })
            done()
        })
    })
})
