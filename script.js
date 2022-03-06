function operate(x, y, operator) {
    switch (operator) {
        case '+':
            return sum(x, y);
        case '-':
            return subtract(x, y);
        case '/':
            return divide(x, y);
        case '*':
            return multiply(x, y);
    }
}

const sum = (x, y) => x + y;
const subtract = (x,y) => x-y;
const divide = (x,y) => x/y;
const multiply = (x,y) => x*y;

function showNumbers(number){

    display.textContent += number;
    displayNumber = display.textContent;
    // return number;
}

const display = document.querySelector('#display');
let displayNumber = 0;


const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        showNumbers(number.id);
    })
});


