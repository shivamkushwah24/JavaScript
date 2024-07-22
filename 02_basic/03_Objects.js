// object literals
 const JsUser = {
    name: "shivam",
    age: 22,
    location:"khargone",
    email:"shivamkushwah560@gmail.com",
    lastLoginDays:["Monday","Saturday"]
 }

 //console.log(JsUser.email);
 //console.log(JsUser["email"]);

 JsUser.email = "kushwah@gmail.com"
 //Object.freeze(JsUser)
 JsUser.email = "sk24@gmail.com"
 //console.log(JsUser);


 JsUser.greeting = function() {
   console.log("hello Js user");
   
 }
 
 JsUser.greetingTwo= function() {
   console.log(`hello Js user,${this.name}`);
   
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());