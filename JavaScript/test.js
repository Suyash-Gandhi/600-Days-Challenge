const greet = (name, callback) => {
  console.log("Hello", name);
  callback();
};

const sayBye = () => {
  console.log("Goodbye!");
};

greet("Suyash", sayBye);
