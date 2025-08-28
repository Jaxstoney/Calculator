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

    // if (num2 === null) {
    //     return num1;
    // }


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
let number = "";
let funct;

const buttons = document.querySelectorAll(".digit");
const displayElement = document.getElementById('display');






buttons.forEach((button) => {

  button.addEventListener("click", (event) => {
    const digit = button.textContent;
    number += digit;
    displayElement.textContent = number;
  });
});






const clear = document.querySelector(".clear");
    
clear.addEventListener("click", (event) => {
    displayElement.textContent = "";
    number = "";
})

let numString;


const operation = document.querySelectorAll(".operator");
    
operation.forEach((button) => {
    button.addEventListener("click", (event) => {
        funct = button.textContent;
        num1 = number;
        number = "";


    })
})



let result;


const Enter = document.querySelector(".enter");

Enter.addEventListener("click", enterFunct) 

function enterFunct() {
    num2 = number;
    result = operate(funct, parseInt(num1), parseInt(num2));
    number = result;
    displayElement.textContent = result;

};



