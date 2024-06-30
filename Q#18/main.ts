
Q:18
 // making an array of countries also prints in original order
 let placesToVisit: string[] = ["Makkah Madina", "Iraq", "Switzerland", "Azerbaijan"];
 console.log("Original Order:", placesToVisit); 

  // print an array in alphabetical order without modifying the actual array
 console.log("Alphabetical Order:", [...placesToVisit].sort());

   // show that the array is still in its original order
   console.log("still in original order:", placesToVisit);

 // print the array in reversed orderwithout modifying theactual array list
  console.log ("Reverse Order:", [...placesToVisit].reverse());
  
  // print that the array is still in its original order
  console.log("still in original order:", placesToVisit);

   // we have changed the original array order now
   console.log("Original Array Reversed:",placesToVisit.reverse());

    // print the array to show that its back to its original order
    console.log("Back to Original Order:", placesToVisit.reverse()); 

    // print the array to show its order has been changed in albabetical order
     console.log("Stored in Alphabetical Order:", placesToVisit.sort());


     // we have changed the original array order now in reverse order again
   console.log("Original Array Reversed Again:",placesToVisit.reverse());