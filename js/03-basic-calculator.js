// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER

let num1 = parseInt (prompt ('Enter a number'));

// COLLECT SECOND NUMBER FROM USER

let num2 = parseInt (prompt ('Enter a second number'));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let operation = prompt ('Choose an operation +, -, *, /');
if (operation != '+' && operation != '-' && operation != '*' && operation != '/') {
    alert ('Enter a valid operation.');
}

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

let getOperation;
switch (operation) {
    case '+':
        result = add(num1, num2);
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
}
alert(`The result of the calculation is ${result}.`);
