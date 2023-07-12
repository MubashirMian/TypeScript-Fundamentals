/*if you could invite anyone, living or deceased,
to dinner, who would you invite? Make a list that
 includes at least three people you’d like to invite
 to dinner. Then use your list to print a message to
 each person, inviting them to dinner.*/
var invitation = ['saad', 'saham', 'shahroz'];
for (var i = 0; i < invitation.length; i++) {
    var invite = invitation[i];
    console.log("I like to you invite you ".concat(invite, " at my place for dinner"));
}
;
/*You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.*/
// removing a freind 
var guestWhoCantMakeIt = invitation.pop();
var newguest = "Daniyal";
// adding daniyal on second index in place of shahroz
invitation[2] = newguest;
for (var i = 0; i < invitation.length; i++) {
    var invite = invitation[i];
    console.log("I like to you invite you ".concat(invite, " at my place for dinner"));
}
;
/*Start with your program from Exercise 14.
Add a print statement at the end of your program
stating the name of the guest who can’t make it.*/
console.log(guestWhoCantMakeIt);
invitation.unshift('Mark Zuckerberg');
// at 3rd index add this name, and '0' means donot canc
invitation.splice(4, 0, 'Elon Musk');
//adding at end of array
invitation.push('Ahsan');
console.log(invitation);
for (var i = 0; i < 5; i++) {
    console.log("Sorry friend ".concat(invitation[i], " I cannot afford to take you to dinner!"));
    invitation.pop();
}
;
for (var i = 0; i < 2; i++) {
    console.log("My friend you are lucky to be invited ".concat(invitation[i], " !"));
}
for (var i = 0; i < invitation.length; i++) {
    //now i have empty list
    invitation.pop();
}
