Q: 11;
//let friendsName = ["IAR", "Ammi", "Bhae Jan", "Pappa"];
//console.log (friendsName);
Q: 12;
// let friendsName =["IAR", "Ammi", 'Bhae Jan', "Pappa"];
// friendsName.forEach(friendName => console.log(`hi ${friendName}, how are u?`));
Q: 13;
// let transportationModes = ["car", "Heavy Bike", "Sport Bike", "Sport Car"];
// transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));
Q: 14;
//let guestsList = ["Saba", "Afshan", "Rahila", "Afshan sindhi"];
// guestsList.forEach(oneGuest  => console.log(`Salaam ${oneGuest}, would you like to eat dinner with me?`));
Q: 15;
var guestList = ["Saba", "Afshan", "Rahila", "Afhan sindhi"];
var dontCome = guestList[0];
console.log(dontCome, " Nahi Aaa Sakta");
guestList.splice(0, 1, "Samahir");
guestList.forEach(function (guest) { return console.log("salaam ".concat(guest, ",would u like to dinner with me?")); });
