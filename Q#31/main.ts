let userNames =["Hasan","Hurrem", "Ali","Admin","Turab"]

userNames =[]

if(userNames.length === 0){
    console.log(" your array is empty we need to find some users!")
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again. `)
        }
     })
}