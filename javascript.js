let displayValue = 0;
let keys = document.querySelectorAll(".key");

function add(num1, num2) {
    console.log(num1 + num2); 
}

function minus(num1, num2){
    console.log(num1 - num2);
}

function division(num1, num2){
    if (num2 === 0) {
        throw new Error("You can't divide by zero dummy!");
    } else {
        console.log(num1 / num2);
    }
}

function multiply(num1, num2){
    console.log(num1 * num2);
}

function operate(num1, num2, operator){
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            minus(num1, num2);
            break;
        case "/":
            try {
                division(num1, num2)
            } catch (error) {
                console.error(error);
            }
            break;
        case "*":
            multiply(num1, num2);
            break;
        default:
            break;
    }
}

function populate(text){
    const screen = document.querySelector("#screen");
    screen.textContent += text;
    displayValue = parseInt(screen.textContent);
}

keys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.textContent.match(/[0-9]/)) {
            populate(key.textContent);
        } else if (key.textContent.match(/[+\-*\/]/)) {
            console.log("ok");
        }
    })
})