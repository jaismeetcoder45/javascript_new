class user{
    constructor(email, passwd){
        this.email = email;
        this.passwd = passwd;
    }
    //we have to set the getter and settor both , if we set only one then we will get error

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get passwd(){
        return `${this._passwd}jais`
    }

    set passwd(value){
        this._passwd = value;
    }
}

const jais = new user("jaismeet@333", "abc");
console.log(jais.email);
