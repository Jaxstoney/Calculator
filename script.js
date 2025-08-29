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




// depending on what button (operator) is clicked that operation/function will be executed/called
function operate(operator, num1, num2) {

    if (num1 === "" || num2 === "") return;

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



let num1 = "";
let number = "";
let funct = "";
let result;



const buttons = document.querySelectorAll(".digit");
const displayElement = document.getElementById('display');
const clear = document.querySelector(".clear");
const operation = document.querySelectorAll(".operator");
const Enter = document.querySelector(".enter");






buttons.forEach((button) => {

  button.addEventListener("click", (event) => {
    const digit = button.textContent;
    number += digit;
    displayElement.textContent = number;
  });
});






    
clear.addEventListener("click", (event) => {
    displayElement.textContent = "";
    num1 = "";
    number = "";
})





operation.forEach((button) => {
    button.addEventListener("click", (event) => {

        if (num1 !== "") {
            result = operate(funct, parseFloat(num1), parseFloat(number));
            displayElement.textContent = result;
            number = result;
            funct = "";
            num1 = "";
        }

        funct = button.textContent;
        num1 = number;
        number = "";
    })
})






Enter.addEventListener("click", enterFunct) 

function enterFunct() {

    result = operate(funct, parseFloat(num1), parseFloat(number));
    displayElement.textContent = result;            
    number = result;
    funct = "";
    num1 = "";

};



