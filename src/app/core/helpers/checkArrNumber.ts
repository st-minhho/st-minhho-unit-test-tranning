export const isArrayAscending = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return false;
  }
  return arr.every((x, i) => {
    return (i === 0 || x >= arr[i - 1]) && !isNaN(x);
  });
};
