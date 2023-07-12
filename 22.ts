/*Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.*/

// Favorite Fruit
const favoriteFruits = ["apples", "bananas", "strawberries"];

for (let i=0; i<3;i++) {
  if (favoriteFruits[i] === "apples") {
    console.log("You really like apples!");
  } else if (favoriteFruits[i] === "bananas") {
    console.log("You really like bananas!");
  } else if (favoriteFruits[i] === "strawberries") {
    console.log("You really like strawberries!");
  } else {console.log("no fruit of your choice")}
}
 if (favoriteFruits[0] == "apples" && favoriteFruits[1] == "bananas")
 {
  console.log("Ohh! great you have apples and bananas as favourite fruits")
 }