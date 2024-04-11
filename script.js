const display = document.querySelector('#outputDisplay');
const equalBtn = document.querySelector('#equalBTN');
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
    let currentNumber = event.target.value;
    equation.push(currentNumber)
    let displayNumber = document.createElement('div');
    displayNumber.textContent = equation.join('');
    display.innerHTML = '';
    display.appendChild(displayNumber);
    
    // Make the equal sign solve the equation 
    equalBtn.addEventListener('click', () => {
        // concat firstNumber and secondNumber from equation
        for (let i = 0; i < equation.length; i++) {
            if (i == '+') {
                let indexToSplit = equation.indexOf('+');
                let firstArr = equation.slice(0, indexToSplit);
                let secondArr = equation.slice(indexToSplit + 1);
                firstNumber = firstArr.join('');
                secondNumber = secondArr.join('');
                operator = '+'
                console.log(operate(firstNumber, operator, secondNumber));
            }
        }
    })
}





