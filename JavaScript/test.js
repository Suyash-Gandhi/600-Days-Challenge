

const proto = { a: 1 };
const obj = Object.create(proto);

console.log(obj.constructor === Object);