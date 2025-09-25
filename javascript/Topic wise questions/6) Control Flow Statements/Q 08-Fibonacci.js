/*
Q8. Implement a program that prints the Fibonacci sequence up to
n terms using a loop.
*/



let first = 0, second = 1
let n = 10

if (n <= 0) return []
if (n === 1) return [first]

let sequence = [first, second]

for (let i = 2; i < n; i++) {
    let next = first + second
    sequence.push(next)
    first = second
    second = next
}

console.log(sequence)




