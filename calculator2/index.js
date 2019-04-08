const Calculator = require('./operator/calculator');
var cal = new Calculator();
try {
    console.log(cal.do(process.argv[2], process.argv[3], process.argv[4]));
} catch (error) {
    console.log (error) ;
}