const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = "+";

plusBtn.onclick = function() {
    action = "+"
};

minusBtn.onclick = function() {
    action = "-"
};

function printResult(result) {
    if (result > 0) {
        resultElement.style.color = 'green'
    } else {
        resultElement.style.color = 'red'
    }
    resultElement.textContent = result; };

function compyteNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol === '+' ? num1 + num2 : num1 - num2
}    

submitBtn.onclick = function() { 
    const result = compyteNumberWithAction(input1, input2, action)
    printResult(result)
};
