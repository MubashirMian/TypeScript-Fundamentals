/*More Conditional Tests: You don’t have to limit the number
of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following*/
// Alien Colors #1
var alienColor = "green";
if (alienColor == "green") {
    console.log("The player earned 5 points.");
}
// Alien Colors #2
alienColor = "yellow";
if (alienColor == "green") {
    console.log("The player earned 5 points.");
}
else {
    console.log("The player earned 10 points.");
}
// Alien Colors #3
alienColor = "red";
if (alienColor == "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
