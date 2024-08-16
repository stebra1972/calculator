



let firstNumber = '';
let secondNumber = '';
let operator = '';

function tasto(value) {
    const display = document.getElementById('display');
    if (value === 'C') {
        display.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
    } else if (value === '=') {
        if (firstNumber && operator && display.value) {
            secondNumber = display.value;
            display.value = calculate(firstNumber + operator + secondNumber);
            firstNumber = '';
            secondNumber = '';
            operator = '';
        }
    } else if (isOperator(value)) {
        if (display.value) {
            firstNumber = display.value;
            operator = value;
            display.value = '';
        }
    } else {
        display.value += value;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function calculate(expression) {
    const operators = [];
    const values = [];
    let number = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (isDigit(char) || char === '.') {
            number += char;
        } else {
            values.push(parseFloat(number));
            number = '';
            while (operators.length && precedence(char) <= precedence(operators[operators.length - 1])) {
                values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
            }
            operators.push(char);
        }
    }
    values.push(parseFloat(number));

    while (operators.length) {
        values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
    }

    try {
        return parseFloat(values.pop().toFixed(3));
    } catch (error) {
        console.error(error.message);
        return "No fratto 0 !";
    }
}

function isDigit(char) {
    return /\d/.test(char);
}

function precedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function applyOperator(operator, b, a) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
            case '/':
                if (b === 0) {
                    return "Errore"; // or handle division by zero as needed
                }
                return a / b
                ;
        default:
            return 0;
    }
}