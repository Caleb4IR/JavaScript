const calculate = (num1, num2, operator) => {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        if (num2 == 0) {
            return "Can't divide by 0";
        }
        return  num1 / num2;
    } else {
        return 'Error: Invalid operator';
    }
}

console.log(calculate(5, 3, '+')); 
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3, '*'));
console.log(calculate(5, 3, '/')); 
console.log(calculate(5, 0, '/')); 
console.log(calculate(5, 3, '%')); 