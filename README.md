# calculator


    let operatorSign = equation.indexOf('+');
    firstNumber = equation.slice(0, operatorSign).join('');
    secondNumber = equation.slice(operatorSign + 1).join('');
    operator = equation.slice(operatorSign, operatorSign + 1).join('');
    finalAnswer = operate(Number(firstNumber), operator, Number(secondNumber));