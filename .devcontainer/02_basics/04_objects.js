//object singleton or constructor related
const A = new Object() //- singleton object 
const B = {} // -non singlton object

A.id = "12abc"
A.name = "Harry"
A.isLoggedIn = false

// console.log(A);
// console.log(typeof B);

const user = {
    email: "harry@gmail.com",
    fullName: {
        userfullName: {
            FName: "Harry",
            LName: "Potter"
        }
    }
}
// console.log(user.fullName.userfullName.FName);//nesting

//objects combining
const o1 = {1: "a", 2: "b"}
const o2 = {3: "a", 4: "b"}
const o4 = {5: "a", 6: "b"}

// const o3 = {o1, o2}
// const o3 = Object.assign({}, o1, o2, o4)//create an empty{} so that all the mergerd values will go in that empty you know otherwise it will go in o1

const o3 = {...o1, ...o2}//90 percent of time we will use this syntax to combine
// console.log(o3);

const users = [
    {
        id: 1,
        email: "tom@gmail.com"
    },
    {
        id: 1,
        email: "tom@gmail.com"
    },
    {
        id: 1,
        email: "tom@gmail.com"
    },
    {
        id: 1,
        email: "tom@gmail.com"
    }
]
users[1].email
// console.log(A);

// console.log(Object.keys(A));
// console.log(Object.values(A));
// console.log(Object.entries(A));//rarely used

// console.log(A.hasOwnProperty('name'));
// console.log(A.hasOwnProperty('email'));


const course = {
    name: "jsInHindi",
    price: "99",
    teacher: "Hitesh sir"
}
// course.name 

// const {teacher} = course//to access value of teacher in object course
const {teacher: sir} = course//to short the name value of teacher in object course
console.log(sir);
console.log(typeof course);


// const navbar = ({/* curly braces means destructuring */}) => {
// this concept is in react 
// }
// navbar(comapny = "Jaismeet")

//API - putting your work on someone else
//JSON representation:-
// {
//     "name": "jaismeet",
//     "CName": "js",
//     "price": "free"
// }

//API in array format:-
// [
//     {},
//     {},
//     {}
// ]