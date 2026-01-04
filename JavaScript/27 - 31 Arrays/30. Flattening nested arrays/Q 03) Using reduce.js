const array = [1, [2, [3, 4], 5], 6, [[7, 8], 9]];

const flatten = (arr) => {
  return arr.reduce((acc, item) => {
    return Array.isArray(item)
      ? acc.concat(flatten(item))
      : acc.concat(item);
  }, []);
};

console.log(flatten(array));