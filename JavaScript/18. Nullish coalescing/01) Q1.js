/*Q1. You receive a value from an API:

let age = apiResponse.age;

Set age to 18 only if it is null or undefined, not if it is 0. 

*/
let apiResponse
let age= apiResponse?.age??18
console.log(age);


