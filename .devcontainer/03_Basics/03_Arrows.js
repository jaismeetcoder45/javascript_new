const user = {
    username: "Jaismeet",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);//this used to refer current context
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username="Rohit sharma"
// user.welcomeMsg()

// console.log(this);
// function chai(){
//     let name = "Jaismeet"
//     // console.log(this);
//     console.log(this.username);//gives error we can use this inside object only not inside function directly
    
// }
// chai()

// const chai = function(){
//     let username = "Jaismeet"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Jaismeet"
    console.log(this);
    console.log(this.username);
}
// chai()

//+++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++++//
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2//implicit defination
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(1,2));
