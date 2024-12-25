let display = document.getElementById("display");
let displayvalue = "";
let operator = null;
let firstnum = null;

function press(num) {
    displayvalue += num;
    display.textContent = displayvalue;
}

function setOP(op) {
    if (displayvalue !== "") {
        firstnum = parseFloat(displayvalue);
        operator = op;
        displayvalue = "";
        display.textContent = op;
    }
}

function calculate() {
    const secondnum = parseFloat(displayvalue);
    let result;

    if (operator === "+") {
        result = firstnum + secondnum;
    } else if (operator === "-") {
        result = firstnum - secondnum;
    } else if (operator === "*") {
        result = firstnum * secondnum;
    } else if (operator === "/") {
        if (secondnum === 0) {
            display.textContent = "Error: Division by zero";
            return;
        } else {
            result = firstnum / secondnum;
        }
    }

    display.textContent = result;
    displayvalue = "";
    operator = null;
    firstnum = null;
}

function clr() {
    displayvalue = "";
    operator = null;
    firstnum = null;
    display.textContent = "0";
}