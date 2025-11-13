class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`usrername is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, passwd){
        super(username)
        this.email = email;
        this.passwd = passwd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('chai', 'chai@gmail.com', '12345')
chai.addCourse();
const tea = new User('tea', 'chai@gmail.com', 'abhj')

// tea.addCourse()
tea.logMe()
console.log(chai === tea);
console.log(chai === Teacher);
