function multiply(a, b) {
    return a*b;
}

function sum(a, b) {
    return a+b;
}

/* 
exports an object 
var exports = module.exports;
is reference to module.exports  
*/
exports.multiply = multiply;
exports.sum = sum;

