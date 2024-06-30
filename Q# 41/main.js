// define a function to print each magicians name from an array
function magic_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_names = ["Harry Potter", "Thomas"];
// call the function to print each magician name
magic_show(magician_names);
