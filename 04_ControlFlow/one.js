//if
// const isUserloggedIn = true
// const temprature = 41

// if(temprature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temprature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const UserloggedIn = true
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserloggedIn && DebitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user loged in");
}