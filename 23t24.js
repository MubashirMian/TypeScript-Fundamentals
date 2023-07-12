/*
Hello Admin: Make a array of five or more usernames,
 including the name 'admin'. Imagine you are writing code that
  will print a greeting to each user after they log in to a website.
   Loop through the array, and print a greeting to each use*/
// Hello Admin
var usernames = ["admin", "eric", "john", "jane"];
// now array usernames data will go in username and in each iteration it will iterate thru array
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username_1 = usernames_1[_i];
    if (username_1 === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username_1, ", thank you for logging in again."));
    }
}
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
var username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
