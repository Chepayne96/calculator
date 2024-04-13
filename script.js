const display = document.querySelector('#outputDisplay');
const equalBtn = document.getElementById('equalBTN');
// Variable for firstNumber, operator, secondNumber
let firstNumber;
let operator;
let secondNumber;
// Function 'operate' takes two num's and operator then does the math
function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        return firstNumber + secondNumber;
    } else if (operator == '-') {
        return firstNumber - secondNumber;
    } else if (operator == '*') {
        return firstNumber * secondNumber;
    } else {
        return firstNumber / secondNumber;
    }
}
// console.log(operate(1, '/', 1));
    let equation = [];
function addDisplay(event) {
    // Takes the input from the buttons and add's them to the equation array then prints them 
    let buttonPushed = event.target.value;
    equation.push(buttonPushed)
    let displayNumber = document.createElement('div');
    displayNumber.textContent = equation.join('');
    display.innerHTML = '';
    display.appendChild(displayNumber);
    return equation;
}
// console.log(equation);

// Takes the equation array spliting it at the operator and assigning it to the variables 
equalBtn.addEventListener("click", (event) => {
    for (i = 0; i < equation.length; i++) {
        if (equation[i] == '+') {
            let operatorSign = equation.indexOf('+');
            firstNumber = equation.slice(0, operatorSign).join('');
            secondNumber = equation.slice(operatorSign + 1).join('');
            operator = equation.slice(operatorSign, operatorSign + 1).join('');
            finalAnswer = operate(Number(firstNumber), operator, Number(secondNumber));
        } else if (equation[i] == '-') {
            let operatorSign = equation.indexOf('-');
            firstNumber = equation.slice(0, operatorSign).join('');
            secondNumber = equation.slice(operatorSign + 1).join('');
            operator = equation.slice(operatorSign, operatorSign + 1).join('');
            finalAnswer = operate(Number(firstNumber), operator, Number(secondNumber));
        } else if (equation[i] == '*') {
            let operatorSign = equation.indexOf('*');
            firstNumber = equation.slice(0, operatorSign).join('');
            secondNumber = equation.slice(operatorSign + 1).join('');
            operator = equation.slice(operatorSign, operatorSign + 1).join('');
            finalAnswer = operate(Number(firstNumber), operator, Number(secondNumber));
        } else {
            let operatorSign = equation.indexOf('/');
            firstNumber = equation.slice(0, operatorSign).join('');
            secondNumber = equation.slice(operatorSign + 1).join('');
            operator = equation.slice(operatorSign, operatorSign + 1).join('');
            finalAnswer = operate(Number(firstNumber), operator, Number(secondNumber));
        }
    }
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    console.log(finalAnswer);
});






