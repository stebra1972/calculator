
//var a = Number(prompt("a?"))
//var b = Number(prompt("b?"));

// make a cell in the top of screen to show the display
const ere = document.createElement('div');
display.style.verticalAlign = 'center';
display.style.textAlign = 'center';
display.style.margin = 'auto';
display.style.padding = '10px';
display.style.fontSize = '50px';
display.style.fontWeight = 'bold';
display.style.border = '5px solid black';
display.textContent = '0';
display.style.width = '500px';
display.style.height = '50px';
display.style.backgroundColor = 'lightgray';

function tasto(value) {
    const display = document.getElementById('display');
    if (value === 'C') {
        display.value = '';
    } else if (value === '=') {
        display.value = calculate(display.value);
    } else {
        display.value += value;
    }
}

function calculate(expression) {
    const operators = [];
    const values = [];
    let number = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (isDigit(char)) {
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

    return values.pop();
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
            return a / b;
        default:
            return 0;
    }
}