function sayMyName(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
// sayMyName//only reference
// sayMyName()//execution

// function add(num1, num2/*-> parameters */){//no need to specify type
//     console.log(num1 + num2);   
// }
function add(num1, num2){//no need to specify type
    // let res = num1 + num2
    // console.log("The result is: ");
    // return res//after writing return nothing below it will be printed 
    return num1+num2
}
// const result = add(4,6)
// console.log("Result:",result);

// add(4,"6")
// add(4,"a")
// add(4,null)

function loginUserMessage(username = "Adam"/* pre defined  */){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return;
    // }
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Jaismeet"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());//undefined

/*******************Day2 of Functions********************* */

function calculateCartPrice(val1, val2, ...num1){//...is also a rest operator which takes a number of arguments as array
    return num1;
}
console.log(calculateCartPrice(200,400,500,800))

const user ={
    username: "Jais",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,400,700,900]

function returnSecondValue(array){
    return array[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,600,800,700]));
