// calculator.
let currentInput = '';
// Defining user input
function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}
