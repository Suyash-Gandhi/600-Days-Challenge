//Q. Use the spread operator to make a shallow copy of an array const arr = [1, 2, 3]. Then modify the new array and show that the original is unchanged.

const arr = [1, 2, 3]

const arr2=[...arr]

arr2.push(4)

console.log(arr,arr2);
