class User{
    constructor(uname){
        this.uname = uname
    }
    logMe(){
        console.log(`usrname: ${this.uname}`);
        
    }
    static createId(){
        return `123`
    }
}
const jais = new User('jais')
// console.log(jais.createId());

class Teacher extends User{
    constructor(uname, email){
    super(uname)
    this.email = email
    }
}
const iphone = new Teacher('iphone','888')
console.log(iphone.logMe());