//1)primitive data type:
//They are call by value
//7 types: string, number, boolean, null, undefined, Symbol(to make an element unique), BigInt
//question - javascript is a statically or dynamicaaly types language?

const score = 100
const score1 = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined or let useEmauil = Undefined

const id = Symbol('123')
const id2 = Symbol('123')
console.log(typeof id)//suymbol

console.log(id==id2)//not same due to symbol dqatatype

const bigNum = 8872430985n//by writing n at end it becomes bigInt
console.log(typeof bigNum)

//2) Reference data type or non primtive
//they are called by reference
//Arrays, Objects, Functions, 

const heros = ["Rohit", "Trent", "rishabh"]
let obj = {
    name: "Jaismeet",
    age : 18
}
//content between curly braces is object

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction)//function
//non primitive data type has OBJECT data type
