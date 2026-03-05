/* Q1. const proto = { a: 10 };
const obj = Object.create(proto);
obj.a = 20;

console.log(obj.a);
console.log(Object.getPrototypeOf(obj).a);


Ans 1.

const obj = Object.create(proto);

This creates a new empty object whose prototype is proto.

Internally:

obj → { }  
[[Prototype]] → proto

Important:

obj does NOT have its own property a

But it inherits a from proto

So if we did:

console.log(obj.a);

It would return 10 (via prototype chain).

 obj.a = 20;

Now we assign a directly to obj.

This does NOT modify the prototype.

Instead, it creates a new own property on obj.

Now structure becomes:

obj → { a: 20 }
[[Prototype]] → proto → { a: 10 }

So now:

obj has its own a = 20

prototype still has a = 10

This is called property shadowing.


Object.getPrototypeOf(obj) It returns the internal [[Prototype]] of the object.
 so - console.log(obj.a) -> output = 20
console.log(Object.getPrototypeOf(obj).a) output = 10



Q2. const proto = {
  count: 0,
  increment() {
    this.count++;
  }
};

const obj1 = Object.create(proto);
const obj2 = Object.create(proto);

obj1.increment();
obj1.increment();
obj2.increment();

console.log(obj1.count);
console.log(obj2.count);
console.log(proto.count);



Ans 2. 

console.log(obj1.count); -> Output = 2
console.log(obj2.count); -> Output = 1 
console.log(proto.count);-> Output = 0

obj1 and obj2 do not have there own count property so they look up prototype chain , to get count.
This creates new property on obj1 and obj2 which is then updated and proto is left untouched




Q3. const proto = {
  value: 5
};

const obj = Object.create(proto);

Object.defineProperty(obj, 'value', {
  value: 20,
  writable: false
});

obj.value = 50;

console.log(obj.value);
console.log(proto.value);


Ans 3. Object.defineProperty() is used to define a new property on an object or modify an existing one, with full control over:

value
writable
enumerable
configurable
get
set

It gives you fine-grained control over how a property behaves.

as obj doesnot have value property it inherits value from proto
Object.defineProperty() is used then to change its value for 5 to 20 and since writable is false assigning new property fails silently, in strict mode it will give an error

console.log(obj.value) -> output = 20
console.log(proto.value)-> output = 5




Q4. const proto = {
  get number() {
    return this._number * 2;
  }
};

const obj = Object.create(proto);
obj._number = 10;

console.log(obj.number);


Ans 4. number is a getter.

It is not a normal property.
When number is accessed, the function runs.
Inside the getter, it uses this._number.

⚠️ Important: this depends on how the property is accessed, not where it is defined.

Creating obj
const obj = Object.create(proto);

This means:

obj does NOT have its own number property.
obj’s prototype is proto.
So the prototype chain looks like:
obj → proto → Object.prototype

Adding _number to obj
obj._number = 10;

Now:

_number is an own property of obj
proto does NOT have _number

Accessing obj.number
console.log(obj.number);

Here’s what happens internally:
JavaScript looks for number in obj
Not found
Looks in proto
Found getter
Getter executes
Inside getter:

return this._number * 2;

💡 What is this here?

Since we accessed it as:

obj.number

👉 this becomes obj

So it evaluates:

obj._number * 2
10 * 2

Result:

20



Q5. const proto = {
  items: []
};

const obj1 = Object.create(proto);
const obj2 = Object.create(proto);

obj1.items.push("A");

console.log(obj2.items);

Ans 5.
Since items is reference type when we push in obj1 it will be reflected in obj2 as well because both obj1 and obj2 share same reference of items.

output = ['A']


Q6. const proto = { a: 1 };
const obj = Object.create(proto);

console.log(obj.hasOwnProperty('a'));
console.log('a' in obj);

Ans 6.

hasOwnProperty() checks only the object's own properties.It does not check the prototype chain.

while in operator checks both object and prototype chain

console.log(obj.hasOwnProperty('a')); output = false
console.log('a' in obj); output = true




Q7. const proto = { x: 10 };
const obj = Object.create(proto);

delete proto.x;

console.log(obj.x);


Ans 7. deleding proto.x will give undefined because This removes the property from the object itself so proto becomes {} and no x is found




Q8. const proto = { value: 100 };
const obj = Object.create(proto);

Object.setPrototypeOf(obj, null);

console.log(obj.value);

Ans 8. setPrototypeOf changes from what object obj inherits 
from and since it is set to null obj becomes a standalone 
object without any prototype chain and since it does not have object with value property it gives undefined



Q9.const proto = { a: 1 };
const obj = Object.create(proto);

proto.a = 5;

console.log(obj.a);


Ans 9. Object.create(proto) does not copy properties it refrences them to prototype

hear we are changing the value of proto directly so it reflects in obj as long as it does not have its "a" property declared



Q10. const proto = {
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


Ans 10. enumerable controls whether a property:

Shows up in property iteration
Appears in Object.keys()
Appears in for...in loops
Appears in JSON.stringify()

It does NOT affect:

Direct access (obj._name)
Property lookup (obj.name)
Internal usage

So:

enumerable = “Should this property be visible when listing properties?”


since enumerable is false console.log(Object.keys(obj)); will return []
 
and console.log(obj.name) work normally and return "JS"











































































































































































*/


