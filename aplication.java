// Sample JavaScript Program
// Author: Your Name

// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Example: Using the function
let userName = "John";
console.log(greetUser(userName));

// Basic arithmetic function
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(10, 20);
console.log("The sum is:", sum);

// Working with arrays
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log("Color List:", colors);

// Simple object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet();

