const proto = {
  get number() {
    return this._number * 2;
  }
};

const obj = Object.create(proto);
obj._number = 10;

console.log(obj.number);