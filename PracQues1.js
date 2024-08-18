// Get user to input a number using prompt ("Enter a number"). Check if the number is a mltiple of 5 or not.

let num = prompt("Enter a number");

let result = num%5 === 0? ("It can devides by 5") : ("Not divided by 5")
console.log(result);