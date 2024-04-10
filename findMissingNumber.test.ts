import { findMissingNumber } from './findMissingNumber';

describe('testing function findMissingNumber', () => {
  test('missing number in an array, standart case', () => {
    const array1: number[] = [5, 0, 1, 3, 2];
    const array2: number[] = [-100, -99, -98, -96];
    const result1 = findMissingNumber(array1);
    const result2 = findMissingNumber(array2);
    expect(result1).toBe(4);
    expect(result2).toBe(-97);
  });

  test('finding a missing number in an empty array', () => {
    const array: number[] = [];
    const result = findMissingNumber(array);
    expect(result).toBe(null);
  });

  test('no missing number', () => {
    const array: number[] = [0, 1, 2, 3];
    const result = findMissingNumber(array);
    expect(result).toBe(undefined);
  });

  test('missing number in an array with duplicates', () => {
    const array: number[] = [1, 1, 2, 3, 4, 4, 6, 7];
    const result = findMissingNumber(array);
    expect(result).toBe(5);
  });

  test('several numbers missing', () => {
    const array: number[] = [5, 6, 3, 0];
    const result = findMissingNumber(array);
    expect(result).toBe(1);
  });
});