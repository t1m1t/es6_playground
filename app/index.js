import * as math from './math';
import App from './stuff';
import $ from 'jquery';


const {num1, num2, zero, add, subtract, multiply, divide} = math;

console.log(`Addition of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`Division of ${num1} and ${num2} is ${divide(num1, num2)}`);

console.log(`Divide by zero result: ${divide(num1, zero)}`);

$('#root').append('<h1>I am Helping</h1>');

console.log('Import from Apples: ', App);