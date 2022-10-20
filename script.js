const buttons = document.querySelectorAll('.buttons')
const display = document.querySelector('.display')
const input = document.querySelector('.input')
let inputValue = input.textContent;
let num1 = '';
let num2 = '';
let operator = '';



listener();


function listener() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            // store number 1

            if (button.classList.contains('digit') && (operator === '')) {
                input.textContent += button.textContent;
                num1 = input.textContent;                   
            }
            
            // store number 2

            else if ((button.classList.contains('digit')) && (num1 !== '') && (operator !== '')) {
                if ((input.textContent !== '') && (num2 === '')) {
                    clearInput();
                }  
                input.textContent += button.textContent;
                num2 = input.textContent;
            }

            // store operator

            else if (button.classList.contains('operator') && !(button.id === '=') && (num1 !== '') && (num2 === '')) {
                operator = button.id;
            }

            // store operator and result of operation in num1

            else if (button.classList.contains('operator') && !(button.id === '=')  && (num1 !== '') && (num2 !== '')) {
                if (operator !== '') {
                    input.textContent = operate(operator, Number(num1), Number(num2));
                    display.textContent = `${num1} ${operator} ${num2} = ${input.textContent}`
                    operator = button.id;
                    num2 = '';
                    num1 = input.textContent;
                } else {
                    clearInput();
                    operator = button.id;
                    input.textContent = operate(operator, Number(num1), Number(num2));
                    display.textContent = `${num1} ${operator} ${num2} = ${input.textContent}`
                    num2 = '';
                    num1 = input.textContent;
                }
            }

            // other buttons

            else if (button.id === '=') {
                if (!num1 || !num2) {
                    clearInput();
                } else {
                    input.textContent = operate(operator, Number(num1), Number(num2));
                    display.textContent = `${num1} ${operator} ${num2} = ${input.textContent}`
                    num1 = input.textContent;
                    num2 = '';
                    operator = '';
                    }
            }   
            
            else if (button.id === 'clear') {
                fullClear();
                num1 = '';
                num2 = '';
                operator = '';
            } 
            
            else if (button.id === 'delete') {
                input.textContent = input.textContent.slice(-(inputValue.length), (inputValue.length - 1))
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
        case '*':
            return multiply(a, b);
        case '/':
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
    if (b !== 0) return a / b;
    return alert(`Don't divide by zero 😳`);
}

function clearInput() {
    input.textContent = '';
    display.textContent = '';
}

function fullClear() {
    input.textContent = '';
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
}