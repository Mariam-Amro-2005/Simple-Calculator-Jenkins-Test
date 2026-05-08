const calculator = require('../src/calculator');

describe('Calculator Tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds -1 + 1 to equal 0', () => {
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });
    test('multiplies 3 * 4 to equal 12', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
});
