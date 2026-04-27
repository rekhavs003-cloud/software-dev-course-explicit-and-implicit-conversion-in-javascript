let num1 = "10";
let num2 = 5;

convert string to number using Number()

let total = Number(num1) + num2;
console.log("Total:", total); 

implicit conversion
console.log("Result:", "5" * 2); 

explicit conversion
let value = "123";
let converted = Number(value);
console.log("Before:", typeof value, "After:", typeof converted); 


let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = "false" === "true"; 
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is not valid!"); 
  }

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

let score = 10;
let bonus = null; 
let finalScore = score + bonus;
console.log("--- Implicit Example ---");
console.log("Before: bonus is", typeof bonus); 
console.log("After calculation (10 + null):", finalScore, "Type is", typeof finalScore);

let input = "not-a-number";
let convertedInput = Number(input); 
console.log("--- Explicit Example ---");
console.log("Before: input is", typeof input);
console.log("After Number() conversion:", convertedInput, "Type is", typeof convertedInput); 
