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



// depending on what button (operator) is clicked that operation/function will be executed/called
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


let entry1=null;
let entry2=null;

const buttons = document.querySelectorAll(".digit");
const displayElement = document.getElementById('display');

buttons.forEach((button) => {

  button.addEventListener("click", (event) => {
    const digit = button.textContent;
    displayElement.textContent += digit;
    entry1 = displayElement.textContent;
  });
});



console.log(entry1);


