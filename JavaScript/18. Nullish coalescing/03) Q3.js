/*
Q3. You receive this input:

let discount = 0;


Ensure 0 is treated as valid.
*/
let userInput={discount:null}
let discount=userInput?.discount ?? 0

console.log(discount);

