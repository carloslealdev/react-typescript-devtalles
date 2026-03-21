import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positive numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    //! 1. Arrange
    const a = -1;
    const b = -2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('should subtract two positive numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = subtract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });

  test('should subtract two negative numbers', () => {
    //! 1. Arrange
    const a = -1;
    const b = -2;

    //! 2. Act
    const result = subtract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = multiply(a, b);

    //! 3. Assert
    expect(result).toBe(a * b);
  });

  test('should multiply by 0', () => {
    //! 1. Arrange
    const a = 0;
    const b = 5;

    //! 2. Act
    const result = multiply(a, b);

    //! 3. Assert
    expect(result).toBe(0);
  });
});
