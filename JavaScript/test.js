const proto = {
  get name() {
    return this._name;
  }
};

const obj = Object.create(proto);

Object.defineProperty(obj, '_name', {
  value: "JS",
  enumerable: false
});

console.log(Object.keys(obj));
console.log(obj.name);