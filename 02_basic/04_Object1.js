//const tinderUser = new Object() //singleton object
//console.log(tinderUser);
const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "shiv"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sk@gmail.com",
    fullname: {
        userfullname:{
        firstname:"shivam",
        lastname:"kushwah" 
     }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a",4: "b"}
//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
const obj3= {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "shivam@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));