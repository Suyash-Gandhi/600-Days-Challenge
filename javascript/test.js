const obj = {
  name: "Bob",
  arrow: () => console.log(this.name)
};
obj.arrow(); // What happens?
