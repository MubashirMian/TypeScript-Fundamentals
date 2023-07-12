/*Find a quote from a famous person you admire. Print the quote and 
the name of its author. Your output should look something like the
 following, including the quotation marks:*/
 
 const quote = 'He who has a why to live for can bear almost any how.';
 const author = 'Friedrich Nietzsche';
 //literal template
 console.log(`${author} once said, "${quote}"`);
 
 /*Repeat Exercise 4, but this time store the famous person’s name 
 in a variable called famous_person. Then compose your message and 
 store it in a new variable called message. Print your message.*/
 
 const famous_person ="Friedrich Nietzsche ";
 const message =`${famous_person} said this  ${quote}`;
 console.log(message);