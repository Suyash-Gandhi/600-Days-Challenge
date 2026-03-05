const proto = {};
const obj = Object.create(proto, {
  name: { value: "Suyash" }
});

obj.name = "JS";
console.log(obj.name);