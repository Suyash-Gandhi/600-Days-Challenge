const array = [1, [2, [3, 4], 5], 6, [[7, 8], 9]];

const flatten = (arr) => {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));  // recursive call
    } else {
      result.push(item);
    }
  });

  return result;
};

console.log(flatten(array));
 
