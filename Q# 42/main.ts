function magic_show(magicians: string[]){
   magicians.forEach(name => console.log(name));
}

 function make_great(magicians: string[]){
    return magician_names.map(name =>`The Great ${name}`); 
 }

 // define an array of magicians names

let magician_names = ["Harry Potter", "Thomas"];

let great_magicians = make_great(magician_names);

console.log(great_magicians);
