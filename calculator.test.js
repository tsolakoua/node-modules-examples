var calculatorObject = require('./calculator.v1.js');

test('test_successful_multiplication', () => {
    expect(calculatorObject.multiply(1, 5)).toBe(5);
  });

test('test_successful_sum', () => {
expect(calculatorObject.sum(1, 5)).toBe(6);
});