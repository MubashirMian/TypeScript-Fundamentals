/*Checking Usernames: Do the following to create a program that
simulates how websites ensure that everyone has a unique username.*/
var current_users = ['user1', 'user2', 'user3', 'user4', 'admin'];
var new_users = ['user5', 'user6', 'user7', 'user8', 'admin'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
}
