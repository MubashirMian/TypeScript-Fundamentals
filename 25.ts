/*Checking Usernames: Do the following to create a program that 
simulates how websites ensure that everyone has a unique username.*/


const current_users = ['user1', 'user2', 'user3', 'user4', 'admin'];
const new_users = ['user5', 'user6', 'user7', 'user8', 'admin'];

for (const new_user of new_users) {
  let isTaken = false;
  for (const current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      isTaken = true;
      break;
    }
  }

  if (isTaken) {
    console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username "${new_user}" is available.`);
  }
}