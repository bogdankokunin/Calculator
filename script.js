const buttons = document.querySelectorAll('.buttons')
const display = document.querySelector('.display')
let displayValue = display.textContent;
let num1 = '';
let num2 = '';
let operator = '';

listener();

function listener() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // digit+noop
            if (button.classList.contains('digit') && (operator === '')) {
                display.textContent += button.textContent;
                num1 = display.textContent;                   
            } else if ((button.classList.contains('operator')) && (!(button.id === '=')) && num2 === '') {
                operator = button.textContent;
                clear();
            } else if (button.classList.contains('operator') && num1 !== '' && num2 === '') {
                clear();
                display.textContent += button.textContent;
                num2 = display.textContent;
                operate(operator, Number(num1), Number(num2));
            } else if (button.classList.contains('operator') && (operator !== '') && (num1 !== '') && (num2 !== '')) {
                num1 = operate(operator, Number(num1), Number(num2));
                num2 = '';
                operator = '';
                display.textContent = num1;
            } else if ((button.classList.contains('digit')) && (num1 !== '') && (operator !== '')) {
                display.textContent += button.textContent;
                num2 = display.textContent;
            }
             else if (button.id === '=') {
                display.textContent = operate(operator, Number(num1), Number(num2));
                num1 = display.textContent;
                num2 = '';
                operator = '';
            }   else if (button.id === 'clear') {
                clear();
                num1 = '';
                num2 = '';
                operator = '';
            } else if (button.id === 'delete') {
                display.textContent = display.textContent.slice(-(displayValue.length), (displayValue.length - 1))
            }
        })
    })
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

function clear() {
    display.textContent = '';
}
