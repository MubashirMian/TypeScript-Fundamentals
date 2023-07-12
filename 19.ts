*Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction
 for the results of each test. Your code should look something like this:*/

 // Conditional tests
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car === "subaru");

console.log("Is car == 'toyota'? I predict False.");
console.log(car === "toyota");

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == "subaru");

console.log("Is car > 'toyota'? I predict True.");
console.log(car > "toyota");

console.log("Is car < 'bmw'? I predict True.");
console.log(car<"bmweeee");

console.log("Is car && 'subaru'? I predict True.");
console.log(car && "subaru");

console.log("Is car || 'toyota'? I predict True.");
console.log(car || "toyota");

console.log("Is car in ['subaru', 'toyota']? I predict True.");
console.log(car in ["subaru", "toyota"]);

console.log("Is car not in ['subaru', 'toyota']? I predict False.");
console.log(car ! in ["subaru", "toyota"]);
