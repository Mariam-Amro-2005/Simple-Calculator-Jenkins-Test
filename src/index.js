/**
 * Main entry point of the application.
 * Demonstrates the usage of the calculator module.
 */

const calculator = require('./calculator');

console.log('--- Simple Calculator ---');
console.log(`Addition (5 + 3): ${calculator.add(5, 3)}`);
console.log(`Subtraction (10 - 4): ${calculator.subtract(10, 4)}`);
console.log(`Multiplication (6 * 7): ${calculator.multiply(6, 7)}`);
console.log(`Division (20 / 4): ${calculator.divide(20, 4)}`);
console.log('-------------------------');
