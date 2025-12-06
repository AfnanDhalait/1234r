// Sample JavaScript Program
// Author: Your Name

// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Call the function
let userName = "Alex";
console.log(greetUser(userName));

// Basic math operation
function multiply(a, b) {
    return a * b;
}

console.log("5 × 4 =", multiply(5, 4));

// Working with an array
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log("Fruit List:", fruits);

// Simple object with a method
const person = {
    name: "Sara",
    age: 30,
    sayHello() {
        console.log(`Hi! I'm ${this.name}.`);
    }
};

person.sayHello();

// Loop example
console.log("Counting:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

