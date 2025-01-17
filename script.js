const display = document.querySelector('.displayBoard');
const numBtn = document.querySelectorAll('.numBtn');
const equalBtn = document.querySelector('.equalBtn');
const clearBtn = document.querySelector('.clearBtn');
const backspaceBtn = document.querySelector('.backspaceBtn');

// Button functions
let equationArr = [];
let equation = '';
numBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.textContent = btn.textContent
        equationArr.push(btn.textContent);
        display.textContent = equationArr.join('');
        return equation = equationArr.join('');
    })
})

equalBtn.addEventListener('click', () => {
    seperateEquation(equation);
})

clearBtn.addEventListener('click', () => {
    equationArr = [];
    equation = '';
    display.textContent = '';
})

backspaceBtn.addEventListener('click', () => {
    equationArr.pop();
    display.textContent = equationArr.join('');
    return equation = equationArr.join('');
})


// Solving the equation functions
function operate(firstInt, operator, secondInt) {
    if (operator == '+') {return firstInt + secondInt;}
    else if (operator == '-') {return firstInt - secondInt;}
    else if (operator == '*') {return firstInt * secondInt;}
    else {
        if (firstInt == 0 || secondInt == 0) {return "You can't divide by 0!";}
        else {return firstInt / secondInt;}
    }
}

function seperateEquation(equation) {
    // split the string into an array
    let equationArr = equation.split('');
    // goes through one by one finding the operator
    for (let i = 0; i < equationArr.length; i++) {
        // once found divide the array into three variables
        if (equationArr[i] == '+' || equationArr[i] == '-' || equationArr[i] == '*' || equationArr[i] == '/') {
            let firstInt = equationArr.slice(0, i).join('')
            let operator = equationArr.slice(i , i + 1).join('')
            let secondInt = equationArr.slice(i + 1).join('')
            display.textContent = operate(Number(firstInt), operator, Number(secondInt))

        }
    }
}

