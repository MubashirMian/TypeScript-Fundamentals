/*Store the names of a few of your friends in a array
 called names. Print each person’s name by accessing 
 each element in the list, one at a time.*/

 /*Start with the array you used in Exercise 11, but instead of
 just printing each person’s name, print a message to them. 
 The text of each message should be the same, but each message
  should be personalized with the person’s name.*/

  const friends_name = ['Saad', 'Shahroz', 'Saham'];
  // intialize loop by zero, increment by 1 and terminate when i>= index of array
 
 for (let i = 0; i < friends_name.length; i++)
 {
   const name = friends_name[i];
   console.log(`He is my best friend ${name}`);
 };