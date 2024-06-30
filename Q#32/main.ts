  // array of current users
 
 let current_users =["Aiza", "Aisha", "Hurrem","Hasan", "Mustafa"]

  // array of new user

 let new_users =["Rehana", "Rizwana","Sundas","Hasan","Turab"]

 //loop through new_users to check for usernames availability

 new_users.forEach(new_one_user  => {
    // making a condition for usernames already exist and save in our-condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //print different message using if else statments
    if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This usernames ${new_one_user} is available`)
    }
 })