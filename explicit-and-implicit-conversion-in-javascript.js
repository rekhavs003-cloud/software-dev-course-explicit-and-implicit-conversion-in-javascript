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

let test = Number("hello");
console.log("Edge Case (NaN):", test);
