const create=()=>{
    let count=0
    return ()=>{
count++
return count
    }
}

const counter=create()

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
