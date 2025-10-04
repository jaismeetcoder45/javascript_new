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
console.log(loginUserMessage("Jaismeet"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());//undefined
