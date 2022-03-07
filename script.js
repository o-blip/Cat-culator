const display = document.querySelector('#display');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

let firstNumber = 0;
let operator = '';


// numbers.forEach((number) => {
//     number.addEventListener('click', () => {
//         showNumbers(number, 'numbers');
//     })
// });

// operators.forEach((symbol) => {
//     symbol.addEventListener('click', () => {
//         chooseOperator(symbol);
//     })
// });

// equals.addEventListener('click', () => {
//     operate(operator);
// });


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.className) {
            case ('number'):
                
                console.log(button.id);
                break;
            case ('operator'):
                console.log(button.id)
                break;
            case ('equals'):
                console.log(button.id)
                break;
            case ('clc'):
                console.log(button.id)
                break;
        }
    })
});




function showNumbers(number, cases) {
    switch (cases) {
        case 'numbers':
            display.textContent += number.id;
            break;
        case 'equals':
            display.textContent = number;
            break;
    }

}

function chooseOperator(symbol) {
    firstNumber = parseInt(display.textContent);
    display.textContent = '';
    operator = symbol;

}

function operate(operator) {
    let secondNumber = parseInt(display.textContent);

    switch (operator.id) {
        case 'plus':
            showNumbers(sum(firstNumber, secondNumber), 'equals');
            break;
        case 'subtract':
            showNumbers(subtract(firstNumber, secondNumber, 'equals'));
            break;
        case 'divide':
            showNumbers(divide(firstNumber, secondNumber, 'equals'));
            break;
        case 'multiply':
            showNumbers(multiply(firstNumber, secondNumber, 'equals'));
            break;
    }
}

const sum = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

