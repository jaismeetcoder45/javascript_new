function SetUserName(username){
    // compelx db calls
    this.username = username
    console.log("called");
}
function createUser(username, email, passwd){
    SetUserName.call(this,username);

    this.email = email;
    this.passwd = passwd;
}
const chai = new createUser("chai","chai@gmail.com","1234")
console.log(chai);
console.log(typeof chai);