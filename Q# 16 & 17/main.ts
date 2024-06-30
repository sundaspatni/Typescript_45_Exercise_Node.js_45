
Q:16
// creating a gust list Array

/*let guestList = [ "Saba", "Afshan", "Rahila", "Afshan sindhi"];

//making variable for those guest who cant come

let dontCome = guestList [0];

// print the name of guest who cant come

console.log( dontCome, "Nahi Aaa Skty hn");

//add or remove values from guest list
guestList.splice(0, 1, "Samahir");

// message print for bigger table
console.log ("Good News ! we have found a bigger table for a dinner");

//adding a new value at starting index of array
guestList.unshift("Ali Haisam");

//adding a new value at ending index of array
guestList.push("Abu Turab");

 // get a middle index of  our guest list array
 let middleIndex: number =Math.floor(guestList.length / 2);

  //adding a new guest to middle index of array
  guestList.splice(middleIndex, 0, "Hurrem");

   // print message of updated list
  console.log("updated list of our guests");

    //sending an invitation list to our guests one by one with their names
  guestList.forEach(oneguest => console.log(`salaam ${oneguest}, would u like to dinner with me`)); */

   // Q#17
   // creating a gust list Array

let guestList = [ "Saba", "Afshan", "Rahila", "Afshan sindhi"];

//making variable for those guest who cant come

let dontCome = guestList [0];

// print the name of guest who cant come

console.log( dontCome, "Nahi Aaa Skty hn");

//add or remove values from guest list
guestList.splice(0, 1, "Samahir");

// message print for bigger table
console.log ("Good News ! we have found a bigger table for a dinner");

//adding a new value at starting index of array
guestList.unshift("Ali Haisam");

//adding a new value at ending index of array
guestList.push("Abu Turab");

 // get a middle index of  our guest list array
 let middleIndex: number =Math.floor(guestList.length / 2);

  //adding a new guest to middle index of array
  guestList.splice(middleIndex, 0, "Hurrem");

   // print message of updated list
  console.log("updated list of our guests");

    //sending an invitation list to our guests one by one with their names
  guestList.forEach(oneguest => console.log(`salaam ${oneguest}, would u like to dinner with me`)); 

   // inform that only two guests can be invited for dinner

   console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

      // using while loopto remove guests from the array until only two names remain 
     while(guestList.length > 2) {
        let removedGuest = guestList.pop();
        console.log(`sorry,${removedGuest} i cant invite you to dinner`);
     }
       // sending an invitation to the last two guest on the list
     console.log("Invitations to the last 2 Guests");

      guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`));
       
      // removing last two guests from the list
      guestList.pop();
      guestList.pop();

       console.log("Empty List:", guestList);


















