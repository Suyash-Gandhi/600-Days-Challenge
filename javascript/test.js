function greet(name = "Guest", ...messages) {
  console.log(`Hello, ${name}!`);
  console.log("Your messages:");
  messages.forEach(msg => console.log(`- ${msg}`));
}

// Example calls
greet("Suyash", "Welcome back!", "You have 3 new notifications.", "Have a great day!");
