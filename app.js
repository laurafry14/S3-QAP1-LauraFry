// Task 2: NODEMON
// Type nodemon into the terminal to use

var msg = "Hello World!";
console.log(msg);

// VALIDATOR

var validator = require("validator");

let name = "laura fry";
console.log(validator.isLowercase(name)); // validates that the name string is lowercase and returns a boolean value

let text = "";
console.log(validator.isEmpty(text)); // validates whether the text string is empty or not
