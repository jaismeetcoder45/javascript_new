//if

// if(condition){
//     scope
// }
const isUserLoggedIn  = true;
const temperature = 41;

// if(isUserLoggedIn){
//     //this will run if the condition(user loggen in) is true
// }
// if(temperature<40){
//     console.log("less than 50");
// }
// else{
//     console.log("more than 50");   
// }

//Comparisons operators:-
// <, >, <=, >=, ==, !=, ===(it checks type also like int, char, string

// if(2 !== 3){
//     console.log("executed");
    
// }

// const score = 200
// if(score > 100){
//     const power = "fly"//you can use let or const but not var
//     console.log(`user power: ${power}`)
// }
//scope of a variable only exists between curly braces and outside it will die

//short hand notation;-

// const balance = 1000
// if(balance > 500) console.log("test");//this is how u can execute used for 1 line but not for multiple line

// if (balance < 500) {
//     console.log("less than ");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 950){
//     console.log("less than 950");
// }
// else{
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//to check two conditions to run a code
if (UserLoggedIn && debitCard ) {
    console.log("Allowed to buy course");
}
//to check if one of the conditions is true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

