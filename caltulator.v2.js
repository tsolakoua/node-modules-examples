function multiply(a, b) {
    return a*b;
}


function sum(a, b) {
    return a+b;
}

// exports and object 
module.exprts.multiply = multiply;
module.exports.sum = sum;

// is reference to module.exports 
// var exports = module.exports