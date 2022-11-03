function multiply(a, b) {
    return a*b;
}

var result = multiply(1, 5);

// it does exports = multiply 
// exports is an alias that points to something 
// exports = 
// module.exports is gone 
// you want to add a property 
exports = multiply;
