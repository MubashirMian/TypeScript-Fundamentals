/*Personal Message: Store a person’s name in a variable, and print
 a message to that person. Your message should be simple, such as,
 “Hello Eric, would you like to learn some Python today?”*/
var names = "Mubashir Abid";
// ${} it called literal template allowing us to use a varaible inside a string, similar to F string in python
console.log("Hello ".concat(names, ", would you like to learn some Python today?"));
