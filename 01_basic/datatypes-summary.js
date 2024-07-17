// Primitive

// 7types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3434546345445745745n



// Refrence (Non primitive)

/// Array,Object,Function

const heros = ["shaktiman", "naaraj", "doga"];
let myObj = {
    name: "shivam",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}


// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename= "shivamkushwahcom"

let anothername = myYoutubename
anothername = "kushwahji"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivamkushwa@google.com"

console.log(userOne.email);
console.log(userTwo.email);