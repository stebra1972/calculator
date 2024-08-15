
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
        display.value = eval(display.value); // Note: eval() can be dangerous, use with caution
    } else {
        display.value += value;
    }
}


function add(a, b) {
    return (a + b)
};

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
        return "Error"
    }
};

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return product(a, b);
        case "/":
            return division(a, b);

        default:
            return "Operatore non valido"

    }
}




//console.log(operate('/', a, b));  



