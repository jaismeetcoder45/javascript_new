const user = {
    username: "jais",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);//this gives values of everything in the scope      
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);//here it will come empty


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }

    return this;
}
const userOne = new User("jais",12,true)
const userTwo = new User("chaiaurcode",11,true)
console.log(userOne.constructor);
// console.log(userTwo);

// Instances of Javascript