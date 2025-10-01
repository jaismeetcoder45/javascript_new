//singleton - when u create an constructor, singleton is a default object

//object literals
//object declaration and initialisation

const mySum = Symbol("Key1")

const jsUser = {
    name: "Jaismeet",//by default string
    "Full name": "Jaismeet Kaur",
    [mySum]: "myKey1",//use [] to use it as symbol
    age: 18,
    location: "Ludhiana",
    isLoggedIn: false,
    lastLoggedIndays: ["Monday", "friday"]
}         

// console.log(jsUser.name)
// console.log(jsUser["Full name"])
// console.log(jsUser[mySum]);

// jsUser.name = "Gunraj"//changing name
// Object.freeze(jsUser)//now you cant change any value
// jsUser.age = 77
// console.log(jsUser);

//functions
jsUser.greetings = function(){
    console.log("hello js user");
}
jsUser.greetings2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetings2());
