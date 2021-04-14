// console.log("Hello from out first JS file!")

// // we have to do a console.log to see stuff!

// let total = 1 + 3
// console.log(total);
// console.log("goodbye!")

// CONDITIONAL STATEMENTS

// let rating = 3;

// if (rating === 3) {
//     console.log("You are a super-star!")
// }

// ONLY RUNS IF CONDITION IS TRUE

// if (1 + 1 === 2) {
//     console.log("math works!")
// }

// Only code inside curly braces does not run if its false

// let random = Math.random();
// if (random < 0.3) {
//     console.log("is this how it works?", random)
// }

// // Else If
// // i.e.
// let rating = 2;

// if (rating === 3) {
//     console.log("You are a superstar!");
// } else if (rating <= 2) {
//     console.log("Meets expecations");
// }

// // ^ these can be chained but must start with if statement

// // else
// let rating = -99;
// if (rating === 3) {
//     console.log("You are a superstar!");
// } else if (rating === 2) {
//     console.log("Mets expectations");
// } else if (rating === 1) {
//     console.log("Needs improvement");
// } else {
//     console.log ("Invalid entry")
// }

// // remember, variable will normally be user input, which would be set to a variable and then used within the if statement

// // Nesting conditionals

// const password = prompt("Please enter new password")

// // password must be 6+ characters
// if (password.length >= 6) {
//     // Password cannot include space
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password!")
//     } else {
//         console.log("password cannot contain spaces!")
//     } 
// } else {
//     console.log("Password too short! must be 6+ characters")
// }

// Truthy and Falsy values
// Falsey values include: false, 0, empty strings, null, undefined, NaN. Everything else is truthy