import { checkArray } from './checkArrNumber';

describe('Empty array', () => {
  it('Have empty array', () => {
    expect(checkArray([])).toBe(false);
  });
});

describe('Have undefine or null element', () => {
  it('Only have one null element', () => {
    expect(checkArray([null])).toBe(false);
  });
  it('Only have one undefine element', () => {
    expect(checkArray([undefined])).toBe(false);
  });
  it('Have null and number element', () => {
    expect(checkArray([null, 3, 4])).toBe(false);
  });
  it('Have undefined and number element', () => {
    expect(checkArray([undefined, 3, 4])).toBe(false);
  });
  it('Have null, string and number element', () => {
    expect(checkArray(['3', null, 5])).toBe(false);
  });
  it('Have undefined, string and number element', () => {
    expect(checkArray(['3', undefined, 5])).toBe(false);
  });
});

describe('Have string element', () => {
  it('Only have one string element', () => {
    expect(checkArray(['3'])).toBe(false);
  });
  it('Have one empty tring element', () => {
    expect(checkArray(['', 3, 4])).toBe(false);
  });
  it('Have all string element', () => {
    expect(checkArray(['3', '4', '5'])).toBe(false);
  });
  it('Have string and number element', () => {
    expect(checkArray([2, '3', '4', '5'])).toBe(false);
  });
});

describe('Have number element', () => {
  it('Only have one number', () => {
    expect(checkArray([1])).toBe(false);
  });
  it('Two elements are the same numbers', () => {
    expect(checkArray([3, 3])).toBe(false);
  });
  it('Array have duplicate numbers in the first', () => {
    expect(checkArray([3, 3, 4])).toBe(false);
  });
  it('Array have duplicate numbers in the last', () => {
    expect(checkArray([3, 4, 4])).toBe(false);
  });
  it('Array have duplicate numbers in the middle', () => {
    expect(checkArray([2, 3, 3, 4])).toBe(false);
  });
  it('Array have duplicate numbers in first and last', () => {
    expect(checkArray([2, 3, 2])).toBe(false);
  });
  it('Array have numbers descending', () => {
    expect(checkArray([5, 4, 3])).toBe(false);
  });
  it('Array have numbers ascending', () => {
    expect(checkArray([3, 4, 5])).toBe(true);
  });
  it('Array have negative numbers and ascending', () => {
    expect(checkArray([-1, 2, 3, 4, 5])).toBe(true);
  });
  it('Array have negative numbers and descending', () => {
    expect(checkArray([-1, -2, -3, -4, -5])).toBe(false);
  });
  it('Array have negative numbers and ascending', () => {
    expect(checkArray([-5, -4, -3])).toBe(true);
  });
});
