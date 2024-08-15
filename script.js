
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
    }
    if (value === '1')  {
        display.value += '1'
    }
    if (value === '2')  {
        display.value += '2'
    }
    if (value === '3')  {
        display.value += '3'
    }
    if (value === '4')  {
        display.value += '4'
    }
    if (value === '5')  {
        display.value += '5'
    }
    if (value === '6')  {
        display.value += '6'
    }
    if (value === '7')  {
        display.value += '7'
    }
    if (value === '8')  {
        display.value += '8'
    }
    if (value === '9')  {
        display.value += '9'
    }
    if (value === '0')  {
        display.value += '0'
    }
    if (value === '+')  {
        display.value += '+'
    }
    if (value === '-')  {
        display.value += '-'
    }
    if (value === '*')  {
        display.value += '*'
    }
    if (value === '/')  {
        display.value += '/'
    }
}




function subtraction(a, b) {
    return (a - b)
};

function product(a, b) {
    return (a * b)
};

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Noooooooo, non si può dividere per 0, asino !!!"
    }
};

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, );
        case "-":
            return subtraction(a, b);
        case "*":
            return product(a, b);
        case "/":
            if (b !== 0) {
                return a / b;
            } else {
                return "Noooooooo, non si può dividere per 0, asino !!!"
            }
        default:
            return "Operatore non valido"

    }
}




//console.log(operate('/', a, b));  



