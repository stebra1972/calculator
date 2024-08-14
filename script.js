
//var a = Number(prompt("a?"))
//var b = Number(prompt("b?"));


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
console.log(operate('/', a, b));  



