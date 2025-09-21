// const score = 400

// const balance = new Number(100)//useing new keyword we will define number which will be a nymber in data type
// console.log(balance);//it will specifically tell it is number because of new keyword in output
// console.log(score);//it will just give number as output

// console.log(balance.toString().length);//cjanged to string data type
// console.log(balance.toFixed(2));//to tell precision

// const Num2 = 123.39768

// console.log(Num2.toPrecision(3));

// const hund = 1000000
// console.log(hund.toLocaleString('en-IN'));//put commas in 0s in indian system

//***************************** Maths ***************************** */

// console.log(Math);
// console.log(Math.abs(-4));//change negative to positive values, and psotive remains positive
// console.log(Math.abs(4));//change negative to positive values, and psotive remains positive
// console.log(Math.round(5.6));
// console.log(Math.round(5.3));
// console.log(Math.ceil(5.7));//ceil chooses upper value
// console.log(Math.floor(5.7));//ceil chooses lower value
// console.log(Math.min(5,6,7,8));
// console.log(Math.max(5,6,7,8));

console.log(Math.random());//gives random value between 0 and 1
console.log((Math.random()*10) + 1);//=1 to avoid 0.0
console.log(Math.floor(Math.random()*10) + 1);//value above 1 and wrap up the number

const min = 10
const max = 20

//to get values between min and max:-
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
