/* Q1. Use a for loop to calculate the sum of numbers from 
1 to 100 */

let sum=0

for (let i = 1; i <=100; i++) {
    
    let prev=sum+i
    sum=prev
    console.log(sum);
    
}


//Option 2:

let Sum = 0;

for (let i = 1; i <= 100; i++) {
  Sum = Sum + i;   // or sum += i
}

console.log("Final Sum:", Sum);


