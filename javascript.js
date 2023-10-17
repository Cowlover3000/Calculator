let total = 0;
let displayValue = 0;
let num = "";
let operator = "";
let keys = document.querySelectorAll(".key");

function add(num1, num2) {
    return(num1 + num2); 
}

function minus(num1, num2){
    return(num1 - num2);
}

function division(num1, num2){
    if (num2 === 0) {
        throw new Error("You can't divide by zero dummy!");
    } else {
        return(num1 / num2);
    }
}

function multiply(num1, num2){
    return(num1 * num2);
}

function operate(num1, num2, operator){
    switch (operator) {
        case "+":
            total = add(num1, num2);
            break;
        case "-":
            total = minus(num1, num2);
            break;
        case "/":
            try {
                total = division(num1, num2)
            } catch (error) {
                console.error(error);
            }
            break;
        case "*":
            total = multiply(num1, num2);
            break;
        default:
            break;
    }
}

function populate(text){
    const screen = document.querySelector("#screen");
    if (operator != "" && num != "" && displayValue == "") {
        screen.textContent = "";
    } else if (text == "AC"){
        screen.textContent = "";
        text = "";
    }
    screen.textContent += text;
    displayValue = screen.textContent;
}

keys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.textContent.match(/[0-9]/)) {
            populate(key.textContent);
        } else if (key.textContent.match(/[+*\-\/]/)) {
            if (displayValue != "" && operator != "" && num != "") {
                operate(parseInt(num), parseInt(displayValue), operator)
                displayValue = "";
                populate(total);
                displayValue = "";
                operator = key.textContent;
                num = total
                return;
            }
            if (total == 0) {
                num = displayValue;                
            }
            operator = key.textContent;
            displayValue = "";
        } else if (key.textContent == "=") {
            operate(parseInt(num), parseInt(displayValue), operator)
            displayValue = "";
            populate(total);
        } else {
            displayValue = "";
            num = "";
            total = 0;
            operator = "";
            populate("AC");
        }
    })
    
})