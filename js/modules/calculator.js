// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (x, y, operation) => {
    switch (operation) {
        case '+':
            return add (x, y);
        case '-':
            return subtract (x, y);
        case '*':
            return multiply (x, y);
        case '/':
            return divide(x, y);
    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add (x, y) {
    return x + y;
}
// SUBTRACT FUNCTION
function subtract (x, y) {
    return x - y;
}
// MULTIPLY FUNCTION
function multiply (x, y) {
    return x * y;
}
// DIVIDE FUNCTION
function divide (x, y) {
    return x / y;
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}