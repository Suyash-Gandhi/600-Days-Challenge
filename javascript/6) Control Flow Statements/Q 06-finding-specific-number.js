/* 
Q6. Write a program that searches for the number 7 in an
array, and breaks out of the loop when found.

 */

const arr=[1,2,3,7,5,6,7]

for (let [index,val] of arr.entries()) {
    if (val===7) {
        console.log(index,val);
        break
    }
    
}