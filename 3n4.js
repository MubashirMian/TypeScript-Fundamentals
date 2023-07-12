/*Find a quote from a famous person you admire. Print the quote and
the name of its author. Your output should look something like the
 following, including the quotation marks:*/
var quote = 'He who has a why to live for can bear almost any how.';
var author = 'Friedrich Nietzsche';
//literal template
console.log("".concat(author, " once said, \"").concat(quote, "\""));
/*Repeat Exercise 4, but this time store the famous person’s name
in a variable called famous_person. Then compose your message and
store it in a new variable called message. Print your message.*/
var famous_person = "Friedrich Nietzsche ";
var message = "".concat(famous_person, " said this  ").concat(quote);
console.log(message);
