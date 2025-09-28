/*
Q7. Write a program that counts how many times a specific letter 
appears in a string.

*/

let count=0

const str="aaabbbccccccc"

const str2=str.split("")

for (const value of str2) {
    if (value==="c") {
        count=count+1
    }
}

 console.log(count);