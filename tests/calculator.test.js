/**
 * Unit tests for the calculator module using Jest.
 */

const calculator = require('../src/calculator');

describe('Calculator Tests', () => {
    // Test for the add function
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds -1 + 1 to equal 0', () => {
        expect(calculator.add(-1, 1)).toBe(0);
    });

    // Test for the subtract function
    test('subtracts 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    // Test for the multiply function
    test('multiplies 3 * 4 to equal 12', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    // Test for the divide function
    test('divides 10 / 2 to equal 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    // Test for error handling on division by zero
    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
});
