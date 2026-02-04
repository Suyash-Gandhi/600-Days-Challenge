/*
Debug this:

let retries = config.retries || 3;


Users complain retries cannot be set to 0.
*/

let config={retries:0}
let retries=config?.retries??3
console.log(retries);
