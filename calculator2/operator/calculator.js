const operators = require('./operators'); 

    class Calculator {
        constructor() {
            this.operation = {
                '+' : new operators.Add,
                '-' : new operators.Sub,
                '*' : new operators.Mul,
            };
        }
        do(numberA,numberB, operation) {
            return this.operation[operation].operate(numberA, numberB);
    }
}
    module.exports = Calculator ;