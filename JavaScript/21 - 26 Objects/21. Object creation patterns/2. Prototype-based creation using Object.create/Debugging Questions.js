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










































































































*/