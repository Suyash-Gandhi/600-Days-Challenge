/*
Q2. Replace the ternary with ??:

let theme = value === null || value === undefined ? "light" : value;

*/
let value="dark"

let theme = value??"light"
console.log(theme);
