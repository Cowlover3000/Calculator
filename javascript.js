function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function division(num1, num2){
    if (num2 === 0) {
        throw new Error("You can't divide by zero dummy!");
    } else {
        return Math.round(num1 / num2);
    }
}

function multiply(num1, num2){
    return num1 * num2;
}