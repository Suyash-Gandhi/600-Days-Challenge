//Q.Merge [1, 2, 3] and [4, 5, 6] using the spread operator into a single array.

const arr=[1, 2, 3]
const arr2=[4, 5, 6]

const merge=[...arr,...arr2]
console.log(merge);
