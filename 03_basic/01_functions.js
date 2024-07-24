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
console.log(loginUserMsg());