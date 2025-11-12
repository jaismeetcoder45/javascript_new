let myName = "Jais      "

// console.log(myName.length);
// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heropower ={
    thor: " hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jais = function(){
    console.log('Jais is present in all objects');
}

Array.prototype.heyJais = function(){
    console.log(`i say hello`);
    
}

myHeroes.jais()
myHeroes.heyJais()
// heropower.heyJais()

// Inheritance

// const user = {
//     name: "chai",
//     gmail: "chai@gmail.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const teachingSupport = {
//     isAvailable: false 
// }
// const TAsupport = {
//     makeAssignment: 'js assignment',
//     fullTime: true,
//     __proto__: TeachingSupport 
// }
// Teacher.__proto__ = User

//modern syntax
// Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "ChaiaurCode      "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
// jais.trueLength()
myName.trueLength()

// this works with global execution object