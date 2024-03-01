
const addition = (a, b) => displayOperator.textContent = a + b;

const subtraction = (a, b) => displayOperator.textContent = a - b;

const multiplication = (a, b) => displayOperator.textContent = a * b;

const division = (a, b) => displayOperator.textContent = a / b;

function operate(firstNumbers, operator, secondNumbers) {
    switch (operator) {
        case "+":
            addition(firstNumbers, secondNumbers)
            break;
        case "-":
            subtraction(firstNumbers, secondNumbers);
            break;
        case "*":
            multiplication(firstNumbers, secondNumbers);
            break;
        case "/":
            division(firstNumbers, secondNumbers);
            break;
        default:
            break;
    }
}

let displayFirst = document.querySelector("#display-txt-first")
let displaySecond = document.querySelector("#display-txt-second")
let displayOperator = document.querySelector("#display-operator")
let digitBtn = document.querySelectorAll(".digit-btn")
let operatorBtn = document.querySelectorAll("#operator-btn")
let clearBtn = document.querySelector('.clear-btn')
let equalBtn = document.querySelector('#equal-btn')

let firstNumArray = [];
let secondNumArray = [];

let firstString;
let secondString;

let alphaNumber = 0;
let betaNumber = 0;

let operator;
let bool = false;

digitBtn.forEach(function (button) {
    button.addEventListener("click", () => {
        if (bool) {
            secondNumArray.push(button.value)
            displayFirst.textContent += button.value
        } else {
            firstNumArray.push(button.value)
            displayFirst.textContent += button.value
        }
    })
})

operatorBtn.forEach(function (button) {
    button.addEventListener("click", () => {
        firstString = firstNumArray.join("");
        displaySecond.textContent = firstString;
        displayFirst.textContent = ""
        displayOperator.textContent = button.value
        operator = button.value
        bool = true;
    })
})

equalBtn.addEventListener("click", () => {
    firstString = firstNumArray.join("");
    secondString = secondNumArray.join("");
    alphaNumber = parseInt(firstString);
    betaNumber = parseInt(secondString);

    operate(alphaNumber, operator, betaNumber);

    console.log(`The first numbers: ${alphaNumber}`);
    console.log(`The second numbers: ${betaNumber}`);
    console.log(`The operator: ${operator}`);
})

clearBtn.addEventListener("click", () => {
    displayFirst.textContent = "";
    displaySecond.textContent = "";
    displayOperator.textContent = "";
    firstNumArray = [];
    secondNumArray = [];
    operator = ""
    bool = false;
    alphaNumber = 0;
    betaNumber = 0;

    firstString = ""
    secondString = ""
})