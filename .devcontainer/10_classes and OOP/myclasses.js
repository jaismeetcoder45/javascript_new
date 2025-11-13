// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPasswd(){
        return `${this.password}abc`
    }
    chnageUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPasswd());
console.log(chai.chnageUsername());

//BTS

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPasswd = function(){
    return `${this.password}abc`
}
User.prototype.chnageUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPasswd());
console.log(tea.chnageUsername());