// array of current users
var current_users = ["Aiza", "Aisha", "Hurrem", "Hasan", "Mustafa"];
// array of new user
var new_users = ["Rehana", "Rizwana", "Sundas", "Hasan", "Turab"];
//loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    // making a condition for usernames already exist and save in our-condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different message using if else statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This usernames ".concat(new_one_user, " is available"));
    }
});
