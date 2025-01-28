const StringCalculator = require('./stringCalculator');

describe('String Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('returns the number itself for a single number', () => {
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('5')).toBe(5);
  });

  test('returns the sum of two numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
    expect(calculator.add('4,5')).toBe(9);
  });

  test('handles multiple numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
    expect(calculator.add('10,20,30')).toBe(60);
  });

  test('throws an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3')).toThrow(
      'Negative numbers not allowed: -2'
    );
    expect(() => calculator.add('1,-2,-3')).toThrow(
      'Negative numbers not allowed: -2, -3'
    );
  });
  
  test('handles newlines as delimiters', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('4\n5\n6')).toBe(15);
  });
});
