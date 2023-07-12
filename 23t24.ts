/*
Hello Admin: Make a array of five or more usernames,
 including the name 'admin'. Imagine you are writing code that
  will print a greeting to each user after they log in to a website.
   Loop through the array, and print a greeting to each use*/
  

 // Hello Admin
 const usernames = ["admin", "eric", "john", "jane"];

 // now array usernames data will go in username and in each iteration it will iterate thru array
 
 for (const username of usernames) {
   if (username === "admin") {
     console.log("Hello admin, would you like to see a status report?");
   } else {
     console.log(`Hello ${username}, thank you for logging in again.`);
   }
 }
 
 if (usernames.length === 0) {
   console.log("We need to find some users!");
 }
 const username = [];
 if (username.length === 0) {
   console.log("We need to find some users!");
 }