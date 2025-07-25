// Get the display element
const display = document.getElementById('display');

/**
 * Appends a value (number or operator) to the display.
 * @param {string} value - The character to append.
 */
function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}

/**
 * Calculates the square of the number currently in the display.
 */
function square() {
    if (display.value) {
        try {
            let result = eval(display.value);
            let squaredResult = result * result;
            display.value = Number(squaredResult.toPrecision(12));
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function calculateResult() {
    try {
        // The eval() function evaluates a string as JavaScript code.
        let result = eval(display.value);

        // Fix for floating point precision issues and display the result
        display.value = Number(result.toPrecision(12));
    } catch (error) {
        
        display.value = 'Error';
    }
}