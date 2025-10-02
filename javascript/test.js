const multiply = (a, b) => {
  if (b !== undefined) {
    // Case 1: multiply(2, 3)
    return a * b;
  } else {
    // Case 2: multiply(2)(3)
    return (c) => a * c;
  }
};
console.log(multiply(2, 3));   // 6
console.log(multiply(2)(3));   // 6
