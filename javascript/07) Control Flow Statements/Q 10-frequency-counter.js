// Q10. Implement a function that counts the frequency of each character in a string using loops.

let frequency={}

let str="aabbbbcccdeef"

const arr=str.split("")

for (let i = 0; i < arr.length; i++) {

      let val = arr[i];

     if (val in frequency) {
        frequency[val]+=1
    }
    else  {
        frequency[val]=1
        
        
    }
  
    
}

console.log(frequency);