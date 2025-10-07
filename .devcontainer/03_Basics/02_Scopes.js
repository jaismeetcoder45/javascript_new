// they can be accessed everywhere throughout the code 
// let a = 10
// const b = 20
// var c = 30

// {}//cyrly braces are scope

// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner a: ",a);//BLOCK SCOPE
}

// console.log(a);//a=300 will come GLOBAL SCOPE
// console.log(b);
// console.log(c);//c being var is accessable outside the if condition while a and b are not so AVOID IT 

function one(){
    const username = "Jaismeet"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website);//cant be accessed from function two
    two()
}
// one()

//only child function can access variables from parent function nbut parent function cannot access any variable from chile function

if(true){
    const username = "Jaismeet"
    if(username == "Jaismeet"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);  cant be accessed 
}
// console.log(username);cant be accessed 

//**********************Interesting ********************* */

console.log(addOne(5));

function addOne(num){
    return num + 1
}
// addOne(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)//it can only be accessed only after declaration of addTwo