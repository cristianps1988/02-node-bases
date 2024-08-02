// 1. Arrange - Arreglar
// 2. Act - Actuar
// 3. Assert - Afirmar


describe('App', () => {
    test('should be true 30', () => {
        // Arrange
        const num1: number = 10
        const num2: number = 20

        // Act
        const sum: number = num1 + num2

        // Assert
        expect(sum).toBe(30)
    })
})