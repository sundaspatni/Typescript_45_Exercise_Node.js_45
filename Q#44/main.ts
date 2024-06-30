 // define a function using rest parameters that accept items arguments representing our sendwich

function makeSandwich(...items: string[]){
   console.log("\nMaking a sandwich with the following items: \n");

   items.forEach(singleItem => console.log("-" + singleItem));

   console.log("\nNow Enjoy Sandwich");
}

 //call the function 3 items with 3 different number of arrguments

 makeSandwich("Chicken", "Chesse", "Mayo", "Egg");

 makeSandwich("Bread", "Butter");

 makeSandwich("Bread", "Butter","Chicken", "Chesse", "Chesse", "Mayo", "Egg");




