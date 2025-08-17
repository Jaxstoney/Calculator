function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {

    return num1 - num2;

}

function multiply(num1, num2) {

    return num1 * num2;

}

function divide(num1, num2) {

    if(num2 == 0) {
        return "Error: Divide by zero"
    }
    return num1 / num2;

}

let num1 = NaN
let num2 = NaN
let operator = null

function operate(operator, num1, num2) {

    switch (operator) {
    case "+":
        return add(num1,num2)
        break;
    case "-":
        return subtract(num1,num2)
        break;
    case "*":
        return multiply(num1,num2)
        break;
    case "/":
        return divide(num1,num2)
        break;
    }

}

num3 = 10
num4 = 6

console.log(operate("-", num4,num3))