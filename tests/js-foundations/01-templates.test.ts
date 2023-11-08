import { emailTemplate } from "../../src/js-foundations/01-templates";

describe('Test 01-templates file', () => {
    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hola estimado');
    })

    test('emailTemplate should cointain {{nombre}}', () => {
        expect(emailTemplate).toMatch(/{{nombre}}/);
    })
})