let a=1
let b= a++
console.log(a,b);
setTimeout(()=>{
console.log(b);
},1000)
