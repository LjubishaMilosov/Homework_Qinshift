const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const value = event.target.getAttribute('data-value');
    console.log(`Button clicked: ${value}`);

    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
        setOperator(value);
    } else {
        appendNumber(value);
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    display.innerText = '0';
    resultDisplayed = false;
    console.log('Display cleared');
}

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    if (currentInput.length >= 10) {
        display.innerText = 'Error: Too large';
        return;
    }

    if (number === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += number;
    display.innerText = currentInput;
    console.log(`Current input: ${currentInput}`);
}

function setOperator(op) {
    if (currentInput === '') return;

    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = op;
        currentInput = '';
    } else if (currentInput !== '') {
        secondOperand = currentInput;
        calculateResult();
        operator = op;
    }
    console.log(`Operator set: ${operator}`);
}

function calculateResult() {
    if (firstOperand === '' || currentInput === '') return;

    secondOperand = currentInput;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (parseFloat(secondOperand) === 0) {
                display.innerText = 'Error: Div by 0';
                clearDisplay();
                return;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    if (result.toString().length >= 10) {
        display.innerText = 'Error: Too large';
        clearDisplay();
        return;
    }

    display.innerText = result.toString();
    firstOperand = result.toString();
    currentInput = '';
    operator = '';
    resultDisplayed = true;
    console.log(`Result calculated: ${result}`);
}