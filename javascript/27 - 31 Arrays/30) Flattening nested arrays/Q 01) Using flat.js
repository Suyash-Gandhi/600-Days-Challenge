const arr = [1, 2, [3, 4, [5, 6,[[7, 8]]]]];

//one level
const flattenedArr = arr.flat();
console.log(flattenedArr); 

// multiple levels
const flattenedArr2 = arr.flat(3);
console.log(flattenedArr2); 

// infinite levels
const flattenedArr3 = arr.flat(Infinity);
console.log(flattenedArr3);

