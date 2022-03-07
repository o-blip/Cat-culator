const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let solution = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.className) {
            case ('number'):
                if (secondNumber === 0) {
                    if (button.id === 'dot') {
                        display.textContent += '.'
                        break;
                    } else {
                        display.textContent += parseFloat(button.id)
                        break;
                    };
                } else {
                    display.textContent = parseFloat(button.id);
                    secondNumber = 0;
                    break;
                }
            case ('operator'):
                if (operator !== '') {

                    solution = operate(operator);
                    display.textContent = solution;
                    firstNumber = parseFloat(display.textContent);
                    operator = button.id;
                } else {
                    firstNumber = parseFloat(display.textContent);
                    display.textContent = '';
                    operator = button.id;
                }
                break;
            case ('equals'):
                solution = operate(operator);
                display.textContent = solution;
                firstNumber = solution;
                operator = '';

                break;
            case ('clc'):
                firstNumber = 0;
                secondNumber = 0;
                display.textContent = '';
                break;
        }
    })
});


function operate(operator) {
    // if (parseFloat(display.textContent) !== NaN) {
    //     return firstNumber;
    // } else {
        secondNumber = parseFloat(display.textContent);
        switch (operator) {
            case 'plus':
                return sum(firstNumber, secondNumber);

            case 'subtract':
                return subtract(firstNumber, secondNumber, 'equals');

            case 'divide':
                if (secondNumber == 0) {
                    console.log('hey');
                    return 'Nice try bub';
                } else {
                    return divide(firstNumber, secondNumber, 'equals');
                }

            case 'multiply':
                return multiply(firstNumber, secondNumber, 'equals');
        // }
    }
}

const sum = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

