var multiply = require('./multiply.v1.js');

test('test_successful_multiplication', () => {
    expect(multiply(1, 5)).toBe(5);
  });