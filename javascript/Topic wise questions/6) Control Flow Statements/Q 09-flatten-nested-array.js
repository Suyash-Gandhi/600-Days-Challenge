/*
Q9. Write a program that flattens a nested array using loops 
(no built-in .flat()).
*/

const arr = [1, 2, 3, [4, 5, [6, 7]]]
let result=[]
const flatten=(array)=>{
array.forEach(element => {
    if (Array.isArray(element)) {
        flatten(element) // go deeper if array
    }
    else{
        result.push(element)
    }
});
}

flatten(arr)

console.log(result);

// using while loop

const arr2=[1, 2, 3, [4, 5, [6, 7]]]

let res=[]
let stack=[arr2]

while (stack.length) {
    let item=stack.shift()

     if (Array.isArray(item)) {
    stack = item.concat(stack); // put inner array back into stack
  } else {
    res.push(item);
  }

}

console.log(res);
