function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype); //object - function is function and object is well

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++ 
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// new keyword plays a vital role. Read the theory of new keyword in JS.
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()