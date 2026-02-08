/* Q5. Why is this code invalid?

a || b ?? c

*/

let a
let b
let c=3

/*console.log(a || b ?? c): Error. JavaScript does NOT allow mixing:
logical operators: ||, &&

nullish coalescing: ??

without explicit parentheses.
*/

// Correct way:
console.log((a || b) ?? c);