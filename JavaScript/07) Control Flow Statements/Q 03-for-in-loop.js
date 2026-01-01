// Q3. Write a for...in loop to print all the keys of an object.

const obj={
    name:"suyash",
    age:21,
    phn:93,
    surname:"gandhi"
}

for (const key in obj) {
    console.log(key);
    
}

/*
The for...in loop in JavaScript is used to iterate over the 
keys (property names) of an object.

It is different from for...of, which iterates over values.

🔹 Key Points:

Purpose: Access keys/properties of an object or the indices of 
an array.

Works with: Objects (most common) and arrays (less recommended 
for arrays).

Not ideal for arrays if you want the values in order—for...of 
or traditional for loop is better.

*/