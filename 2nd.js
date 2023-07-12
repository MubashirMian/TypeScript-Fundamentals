/*Name Cases: Store a person’s name in a variable, and
 then print that person’s name in lowercase,
 uppercase, and titlecase.*/
var NAME = "Mubashir Abid Mian";
console.log(NAME.toLowerCase());
console.log(NAME.toUpperCase());
//charAt(0) retrieves the character at index 0 
//toUppercase() make it in block letter
//.slice(1) from 1st index to last index it converts letters in lowecase
console.log(NAME.charAt(0).toUpperCase() + NAME.slice(1).toLowerCase());
