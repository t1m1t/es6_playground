
export function add(x, y){
    return x + y;
}

export function subtract(x, y){
    return x - y;
}

export function multiply(x, y){
    return x * y;
}

export function divide(x, y){
    if (y === 0){
        return "Can't divide by zero";
    }
    return x / y;
}

export const num1 = 10;
export const num2 = 5;
export const zero = 0;