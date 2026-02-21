/*
1. Create an object animalPrototype with a method speak().

Create two animals using Object.create() and demonstrate method sharing.
*/

// Ans 1

const animalPrototype={
    speak(){
        console.log(`${this.name} ${this.sound}`)
        
    }
}

const a1=Object.create(animalPrototype)

a1.name="dog"
a1.sound="bark"
a1.speak()
const a2=Object.create(animalPrototype)

a2.name="cat"
a2.sound="meow"
a2.speak()
/*
2. How can you check whether a property belongs to the object itself or its prototype?

Write an example.

*/

// Ans 2

// way 1: hasOwnProperty - lives on object.property so every object can access it. It can break in 2 situations if using Object.create(null) and Object Overrides method
console.log(a1.hasOwnProperty("name"))  // "name" → directly added to a1
console.log(a1.hasOwnProperty("speak")) // "speak" → comes from animalPrototype
 
// way 2: hasOwn - A static method on Object. It fixes both problems with hasOwnProperty 
console.log(Object.hasOwn(a1,"name"))
console.log(Object.hasOwn(a1,"speak"))

// way 3 : in opretor - Checks both Own proberties and prototype properties
console.log("speak" in a1)
console.log("name" in a1)


/*
3. Create an object using Object.create(null).

What happens if you try to call .toString() on it?

*/

// Ans 3

const a3 = Object.create(null)
//console.log(a1.toString()) // will give error because does NOT inherit from Object.prototype


/*
4. const proto = { count: 0 }
const obj1 = Object.create(proto)
const obj2 = Object.create(proto)

obj1.count++

What is the value of:

obj1.count

obj2.count

proto.count*/

// Ans 4
const proto = { count: 0 }
const obj1 = Object.create(proto)
const obj2 = Object.create(proto)

obj1.count++

console.log(obj1.count,obj2.count,proto.count)


/*
5. Write a prototype-based pattern for creating users with shared login() method.

*/

// Ans 5

const user = {
    password:"password",
    login(){
        console.log(`${this.name} is logged in`)
        
    }
}

const userPrototype = {
    login(inputPassword) {
        if (this.password === inputPassword) {
            console.log(`${this.name} logged in successfully`)
        } else {
            console.log("Invalid password")
        }
    }
}

const createUser = (name, password) => {
    const user = Object.create(userPrototype)
    user.name = name
    user.password = password
    return user
}

const u1 = createUser("Suyash", "1234")
const u2 = createUser("Rahul", "abcd")

u1.login("1234")   
u2.login("wrong")  

/*
6. What is the difference between: const obj = {}; and const obj = Object.create(Object.prototype);

*/

// Ans 6

/*
# ✅ Short Answer

There is **no practical difference** between:

```js
const obj = {};
```

and

```js
const obj = Object.create(Object.prototype);
```

Both create an object whose prototype is `Object.prototype`.

---

# 🔎 Let’s Prove It

```js
const obj1 = {};
const obj2 = Object.create(Object.prototype);

console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true
```

Both return `true`.

---

# 🧠 What Happens Internally

### When you write:

```js
const obj = {};
```

JavaScript internally does something conceptually similar to:

```js
const obj = new Object();
```

And `new Object()` internally behaves like:

```js
const obj = Object.create(Object.prototype);
```

So:

```
{} → Object.prototype → null
Object.create(Object.prototype) → Object.prototype → null
```

Same prototype chain.

---

# 📌 Prototype Chain Visualization

For both cases:

```
obj
  ↓
Object.prototype
  ↓
null
```

So both objects inherit:

* toString()
* hasOwnProperty()
* valueOf()
* constructor
* etc.

---

# ⚡ Subtle Differences (Theoretical)

Even though behavior is identical, there are small conceptual differences:

| `{}`                       | `Object.create(Object.prototype)`             |
| -------------------------- | --------------------------------------------- |
| Shorthand syntax           | Explicit prototype definition                 |
| More common                | More explicit                                 |
| Cleaner for normal objects | Used when controlling prototype intentionally |

Functionally though → **no difference**.

---

# 🚨 Important Contrast Case

Now compare with this:

```js
const obj = Object.create(null);
```

This is completely different.

Prototype chain becomes:

```
obj → null
```

No `toString()`, no `hasOwnProperty()`, etc.

That’s where `Object.create()` becomes powerful.

---

# 🎯 When Would You Use Each?

### Use `{}` when:

* Creating normal objects
* No special inheritance control needed
* 99% of everyday cases

### Use `Object.create(Object.prototype)` when:

* You want to be explicit
* Teaching prototype concepts
* Dynamically controlling prototype

---

# 🔥 Interview-Level Insight

If someone says:

> “Is `{}` syntactic sugar for `Object.create(Object.prototype)`?”

Answer:

✔ Conceptually yes
❌ Not literally the same implementation
✔ But they produce equivalent objects

---

# 🏁 Final Conclusion

There is **no functional difference** between:

```js
{}
```

and

```js
Object.create(Object.prototype)
```

Both create a normal object inheriting from `Object.prototype`.

---
*/


