
//var a = Number(prompt("a?"))
//var b = Number(prompt("b?"));

// make a cell in the top of screen to show the result
const result = document.createElement('div');
result.style.verticalAlign = 'center';
result.style.textAlign = 'center';
result.style.margin = 'auto';
result.style.padding = '10px';
result.style.fontSize = '50px';
result.style.fontWeight = 'bold';
result.style.border = '5px solid black';
result.textContent = '0';
result.style.width = '500px';
result.style.height = '50px';
result.style.backgroundColor = 'lightgray';
document.body.appendChild(result);





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



