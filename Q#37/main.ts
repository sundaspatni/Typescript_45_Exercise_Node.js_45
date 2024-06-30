 // making a function

 function make_shirt (size: string = "Large", printMessage: string = "I love typescript"){
      console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
 }

 // calling a function  with by default values

 make_shirt();

 // calling a function now with medium size and default message

 make_shirt("Medium")

 // calling a function now again with small size & different message

 make_shirt("Small", "BABA KI PARI")