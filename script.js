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

// let num1 = NaN
// let num2 = NaN
// let operator = null



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


let num1;
let num2;
let funct;

const buttons = document.querySelectorAll(".digit");
const displayElement = document.getElementById('display');






buttons.forEach((button) => {

  button.addEventListener("click", (event) => {
    const digit = button.textContent;
    displayElement.textContent += digit;
  });
});






const clear = document.querySelector(".clear");
    
clear.addEventListener("click", (event) => {
    displayElement.textContent = "";
})





const operation = document.querySelectorAll(".operator");
    
operation.forEach((button) => {
    button.addEventListener("click", (event) => {
        funct = button.textContent;
        num1 = parseInt(displayElement.textContent);
        displayElement.textContent = "";
    })
})






const Enter = document.querySelector(".enter");

Enter.addEventListener("click", enterFunct) 

function enterFunct() {
    num2 = parseInt(displayElement.textContent);
    displayElement.textContent = String(operate(funct, num1, num2));
};



