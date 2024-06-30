function magic_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magician_names.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magician names
var magician_names = ["Harry Potter", "Thomas"];
// making a copy of original  through slice function
var copy_magician_names = magician_names.slice();
// modify the copied array to include The Great with their names
make_great(copy_magician_names);
var copy_great_magicians = make_great(copy_magician_names);
// show both array original and copied
// original
console.log("Original Array\n");
magic_show(magician_names);
console.log("Copied Array\n");
magic_show(copy_great_magicians);
