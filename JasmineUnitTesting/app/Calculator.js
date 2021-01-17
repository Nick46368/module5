class Calculator {
    constructor() {
    }

    summ() {
        if (arguments === 0 && notTypeOf(Number)) {
            throw new Error (`Input value is not a Number! Enter valid data!`)
        } else {
            return Array.prototype.reduce.call(arguments, function(a, b){
                return a + b; })
        }
    }

    multiply() {
        if (arguments === 0 && notTypeOf(Number)) {
            throw new Error (`Input value is not a Number! Enter valid data!`)
        } else {
            return Array.prototype.reduce.call(arguments, function(a, b){
                return a * b; })
        }
    }
}

module.exports = Calculator;
