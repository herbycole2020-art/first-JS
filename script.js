// let newage =prompt ("Please enter your age:");
// let newvote = newage >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
// alert(newvote);
// console.log(parseInt(newage));

// let a = parseInt(prompt("Enter first number:"));
// let b = parseInt(prompt("Enter second number:"));
// let sum = a + b;
// alert("The sum of " + a + " and " + b + " is: " + sum);
// console.log(sum);45

// Conditioners

// if statement
// if (5>2) {
//     console.log("5 is the greatest number");
// }

// let num = 5;
// if (num > 5) {
//     console.log("round to 1");
// } else if (num == 5) {
//     console.log("round to 1");
// } else {
//     console.log("round to 0");
// }

// // Template literals
// let age = 34;
// console.log(`This user's age is ${age}`);


// const userNumber = parseInt(prompt("Enter a number:"));
// if (userNumber >= 0) {
// alert("The number is positive.");
// // } else {
// //     alert("The number is negative.");
// } else if (userNumber < 0) {
//     alert("The number is negative.");
// }else if (isNaN(userNumber)) {
//     alert("Please enter a valid number.");
// }

const numOne = parseInt(prompt("Enter the first number:"));
const numTwo = parseInt(prompt("Enter the second number:"));
const numThree = parseInt(prompt("Enter the third number:"));
if (numOne > numTwo && numOne > numThree) {
    alert("The first number is the greatest.");
} else if (numTwo > numOne && numTwo > numThree) {
    alert("The second number is the greatest.");
} else if (numThree > numOne && numThree > numTwo) {
    alert("The third number is the greatest.");
} else if (numOne === numTwo && numOne === numThree) {
    alert("All three numbers are equal.");
} else if (isNaN(numOne) || isNaN(numTwo) || isNaN(numThree)) {
    alert("Please enter valid numbers.");
}

