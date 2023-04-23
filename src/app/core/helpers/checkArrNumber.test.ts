import { isArrayAscending } from './checkArrNumber';

describe('Empty array', () => {
  it('Have empty array', () => {
    expect(isArrayAscending([])).toBe(false);
  });
});

describe('Have undefine or null element', () => {
  it('Only have one null element', () => {
    expect(isArrayAscending([null])).toBe(false);
  });
  it('Only have one undefine element', () => {
    expect(isArrayAscending([undefined])).toBe(false);
  });
  it('Have null and number element', () => {
    expect(isArrayAscending([3, null, 4])).toBe(false);
  });
  it('Have undefined and number element', () => {
    expect(isArrayAscending([undefined, 3, 4])).toBe(false);
  });
  it('Have null, string and number element', () => {
    expect(isArrayAscending(['3', null, 5])).toBe(false);
  });
  it('Have undefined, string and number element', () => {
    expect(isArrayAscending(['3', undefined, 5])).toBe(false);
  });
});

describe('Have string element', () => {
  it('Only have one string element', () => {
    expect(isArrayAscending(['3'])).toBe(false);
  });
  it('Have one empty tring element', () => {
    expect(isArrayAscending(['a', 3, 4])).toBe(false);
  });
  it('Have all string element', () => {
    expect(isArrayAscending(['a', '4', '5'])).toBe(false);
  });
  it('Have string and number element', () => {
    expect(isArrayAscending([2, 's', '4', '5'])).toBe(false);
  });
});

describe('Have number element', () => {
  it('Only have one number', () => {
    expect(isArrayAscending([1])).toBe(false);
  });
  it('Two elements are the same numbers', () => {
    expect(isArrayAscending([3, 3])).toBe(true);
  });
  it('Array have duplicate numbers in the last', () => {
    expect(isArrayAscending([3, 4, 4])).toBe(true);
  });
  it('Array have duplicate numbers in the middle', () => {
  });
  it('Array have duplicate numbers in first and last', () => {
    expect(isArrayAscending([2, 3, 2])).toBe(false);
  });
  it('Array have numbers descending', () => {
    expect(isArrayAscending([5, 4, 3])).toBe(false);
  });
  it('Array have numbers ascending', () => {
    expect(isArrayAscending([3, 4, 5])).toBe(true);
  });
  it('Array have negative numbers and ascending', () => {
    expect(isArrayAscending([-1, 2, 3, 4, 5])).toBe(true);
  });
  it('Array have negative numbers and descending', () => {
    expect(isArrayAscending([-1, -2, -3, -4, -5])).toBe(false);
  });
  it('Array have negative numbers and ascending', () => {
    expect(isArrayAscending([-5, -4, -3])).toBe(true);
  });
});
