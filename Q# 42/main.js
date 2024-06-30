function magic_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magician_names.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magician_names = ["Harry Potter", "Thomas"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
