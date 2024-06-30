// define a function using rest parameters that accept items arguments representing our sendwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
//call the function 3 items with 3 different number of arrguments
makeSandwich("Chicken", "Chesse", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Chesse", "Chesse", "Mayo", "Egg");
