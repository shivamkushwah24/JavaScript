function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

//sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }

addTwoNum(5,5)

function addTwoNum(num1,num2){
//     let result = num1 + num2;
//     return result
       return num1 + num2
 }

const result = addTwoNum(3,5)

//console.log("Result:",result);

function loginUserMsg(username){
    if(username === undefined){
        console.log("pls enter username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMsg("shivam"));
//console.log(loginUserMsg("shivam"));

function calculateCardPrice(val1,val2, ...num1){
    return num1
}

//console.log(calculateCardPrice(200,400,500,600));

const user = {
    username: "shivam",
    price: 199
}

function handleObject(anyObject ){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject(
    {
        username: "shiv",
        price: 399
    }
)

const myName = [200,400,600,800]

function returnSecondValue(getArray) {
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));