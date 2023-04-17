const isArrayAscending = (arr) => {
  return arr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
};

const isArrayNumber = (arr) => {
  return arr.every((element) => {
    return typeof element === 'number';
  });
};

const isDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};

export const checkArray = (array) => {
  if (array?.length <= 1 || !isArrayNumber(array) || isDuplicate(array)) {
    return false;
  } else {
    return isArrayAscending(array);
  }
};
