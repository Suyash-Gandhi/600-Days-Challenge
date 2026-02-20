/*
1. Create an object literal for a user with properties:

name

age

isLoggedIn
Then print all values.
*/

// Ans 1

const user ={
    name: "abc",
    age: 22,
    isLoggedIn: true
}

console.log(user);


/*
2. Given:

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023
};


Access model using:

Dot notation

Bracket notation
*/

// Ans 2
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023
};

console.log(car.model);
console.log(car["model"]);




/*
3. Add a color property to the above car object dynamically.
*/

// Ans 3
car.color="red"
console.log(car);



/*
4. Change year to 2024.
*/

// Ans 4
car.year=2024
console.log(car);


/*
5.Remove model from the object.
*/

// Ans 5

delete car.model
console.log(car);


/*
6. Create a person object with:

name

greet() → logs: “Hi, I am <name>”
*/

// Ans 6

const person={
name:"abc",
greet(){
    console.log(`Hi, I am ${this.name}`)
}
}

person.greet()




/*
7. Print all keys and values using:

for...in

Object.keys()
*/

// Ans 7
for (const key in car) {
  console.log(key,":",car[key]);
  
}


/*
8. How do you check if "age" exists in an object?
*/

// Ans 8
//way 1:
console.log("age" in user);

//way 2:
  console.log(user.hasOwnProperty("age"));
 
//way 3:
console.log(Object.hasOwn(user, "age"))



/*
9. Create an object where the key is dynamic:

const key = "salary";


Add it inside object literal.
*/

// Ans 9

const key ="salary"

const emp={
  name:"abc",
  [key] : 25000

}

console.log(emp);


/*
10. Given:

const company = {
  name: "TechCorp",
  address: {
    city: "Delhi",
    pin: 110001
  }
};


Safely access pin.
*/

// Ans 10

const company = {
  name: "TechCorp",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

console.log(company?.address?.pin);
