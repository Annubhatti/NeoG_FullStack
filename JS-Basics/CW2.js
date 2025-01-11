// ### **Hoisting**

// **Hoisting** is a concept in JavaScript where **variables** and **function declarations** are moved (or "hoisted") to the top of their scope (the top of the file, function, or block of code) before the code is actually executed.

// JavaScript

Copy

console.log(myNum); // Output: undefined

var myNum = 10;

console.log(myNum); // Output: 10

// The above code actually behaves like this:

// JavaScript

// Copy

var myNum; // Declaration is hoisted to the top
console.log(myNum); // Output: undefined
myNum = 10; // Assignment happens here
console.log(myNum); // Output: 10

// **let and const Declarations**: These variables are also hoisted, but they are not initialized. This means you cannot use them before the declaration line. If you try, you'll get a ReferenceError. They are in a "temporal dead zone" from the start of the block until they are declared.

// **Functions are also hoisted:**

// These are fully hoisted, meaning you can call the function anywhere in the scope, even before it is declared.

// JavaScript

Copy

myFunction(); // Output: "Hello, World!"

function myFunction() {
  console.log("Hello, World!");
}