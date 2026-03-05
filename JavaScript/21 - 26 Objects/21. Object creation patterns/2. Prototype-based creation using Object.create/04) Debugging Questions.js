/*
Q1. Why does this not behave as expected?

const proto = {
  count: 0
};

const obj = Object.create(proto);

obj.count++;
console.log(proto.count);

Ans 1.

This does not behave as expected because obj.count++ first reads the value from the prototype (proto.count), but when incrementing it creates a new property count on obj itself instead of modifying the prototype property. Therefore proto.count remains 0.







Q2. Identify the subtle issue:

const proto = {
  items: []
};

const obj = Object.create(proto);

obj.items = obj.items.concat("A");
console.log(proto.items);


Ans 2. obj.items is read from the prototype, but concat() returns a new array which is then assigned to obj.items. This creates a new property on obj, leaving proto.items unchanged.










Q3. What is the hidden bug?    

const proto = { 
  greet() {
    return `Hi ${this.name}`;
  }
};

const obj = Object.create(proto);

const greetFn = obj.greet;
console.log(greetFn());

Ans 3. 

This line is the problem:

const greetFn = obj.greet;

Here you are extracting the function reference.

Now greetFn is just a standalone function, not tied to obj.


When you call:

greetFn()

The function is called without an object.

So JavaScript determines this differently.

In strict mode
this = undefined

Accessing:

this.name

would cause an error.

In non-strict mode (most likely case)
this = global object

In browsers:

this = window

So JavaScript checks:

window.name

which is usually empty or undefined.

Output becomes:

Hi undefined

Correct Ways to Fix It:

Option 1 — Bind the function
const greetFn = obj.greet.bind(obj);
console.log(greetFn());

Option 2 — Call it with the object
console.log(obj.greet());

Option 3 — Use call
console.log(greetFn.call(obj));








Q4. Why does this fail silently?

const proto = {};
const obj = Object.create(proto, {
  name: { value: "Suyash" }
});

obj.name = "JS";
console.log(obj.name);

Ans 4. 
The second argument of Object.create() defines property descriptors, similar to Object.defineProperty().

So this:

name: { value: "Suyash" }

creates a property with default descriptor values, where writable if false, so property cannot be changed

Why It "Fails Silently"

In non-strict mode, JavaScript does not throw an error when writing to a non-writable property.

Instead it ignores the assignment.









Q5. Find the logic flaw:

const proto = {
  settings: {
    darkMode: false
  }
};

const user1 = Object.create(proto);
const user2 = Object.create(proto);

user1.settings.darkMode = true;


Ans 5. The flaw is shared mutable state in the prototype.

Because settings is an object, all objects inheriting from the prototype share the same reference.

So modifying it through one instance affects all instances.

a new property for user1 will only be created if we wrote:

user1.settings = { darkMode: true };

But here we wrote:

user1.settings.darkMode = true;

This mutates the shared object, instead of shadowing it.

so insted of user1 proto is being modified









Q6. Why does this break inheritance?

const proto = { a: 1 };
const obj = Object.create(proto);

obj.__proto__ = { b: 2 };

console.log(obj.a);


Ans 6. __proto__ is a special getter/setter that allows you to read or change the internal prototype.

obj.__proto__ = { b: 2 };

This replaces the prototype of obj.

Before:

obj
 ↓
proto { a:1 }
 ↓
Object.prototype

After:

obj
 ↓
{ b:2 }
 ↓
Object.prototype

Notice something important:

proto { a:1 }

is completely removed from the chain. so the result becomes undefined












Q7. Spot the memory inefficiency:

function createUser(name) {
  const proto = {
    greet() {
      console.log(`Hi ${name}`);
    }
  };
  return Object.create(proto);
}


Ans 7. The issue is about creating a new prototype object every time the function runs.

When this function runs, two things happen every time:

A new object proto is created

A new function greet() is created inside it

Normally, prototypes are used to share methods between objects.

But here:

Each user gets its own prototype

Each prototype contains its own greet function

So instead of one shared function, you create N copies of the same function.

But name is not stored on the object.
It comes from the closure of the function call.

So every greet() must remember its own name, which forces JavaScript to create a new function each time.













Q8. Why might this be dangerous?

const obj = Object.create(null);
obj.toString();

Ans 8. When you do:

const obj = Object.create(null);

The prototype chain becomes:

obj → null

There is no Object.prototype in the chain.

So the object does not inherit any standard object methods.

The object literally has no built-in utilities.

So toString does not exist.

This results in:

TypeError: obj.toString is not a function

So the danger is:

The object does not inherit Object.prototype methods.












Q9. What subtle issue exists?

const proto = {
  get value() {
    return this.internal;
  }
};

const obj = Object.create(proto);
console.log(obj.value);


Ans 9. The subtle problem is how this works with getters and the prototype chain.


When JavaScript executes:

obj.value

it searches:

obj → no value

proto → finds getter value

So the getter runs.

4. The Important Part — this

Inside the getter:

get value() {
  return this.internal;
}

this is not proto.

this is the object that accessed the property, which is:

obj

So the getter effectively runs as:

return obj.internal;

But obj does not have internal.

So JavaScript searches again:

obj.internal → not found
proto.internal → not found
Object.prototype.internal → not found

Result:

undefined

So the output becomes:

undefined

Someone might assume the getter reads from proto.

They might think this happens:

proto.internal

But it actually reads:

obj.internal

because getters use the receiver (this), not the object where the getter is defined









Q10. Why is this misleading?

const proto = { a: 1 };
const obj = Object.create(proto);

console.log(obj.constructor === Object);


Ans 10. At first glance someone might think:

"obj was created using Object.create, so its constructor should be Object."

The console prints:

true

But the reason it prints true is misleading.

2. What the Prototype Chain Looks Like

After running the code:

obj → proto → Object.prototype → null

Important observations:

obj has no constructor

proto has no constructor

So JavaScript keeps looking up the chain.

3. Where constructor Actually Comes From

JavaScript finds constructor here:

Object.prototype.constructor

And that value is:

Object

So when you run:

obj.constructor

JavaScript actually resolves it as:

Object.prototype.constructor
4. Why This Is Misleading

The result:

obj.constructor === Object

is true, but not because obj was constructed by Object.

It is true simply because:

constructor was inherited from Object.prototype

So the result tells you nothing about how the object was actually created.

5. Demonstrating the Problem

You can easily change it:

proto.constructor = Array;

console.log(obj.constructor === Array);

Now the output becomes:

true

But clearly:

obj is NOT an Array

This proves constructor is not reliable for detecting an object's type.

6. The Core Issue

The misleading part is:

constructor is just a property found through the prototype chain, not a guaranteed record of how the object was created.

It can be changed, overridden, or inherited incorrectly.

7. Better Ways to Check Types

Instead of relying on constructor, developers typically use:

instanceof

Object.getPrototypeOf()

Object.prototype.toString.call()

depending on the situation.

















































*/