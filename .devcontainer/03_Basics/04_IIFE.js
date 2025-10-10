//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);   
// }
// chai()
(function chai(){
    console.log(`DB CONNECTED`);   
})();   // -> //use semicolon her to avoid error in next function

//first () for defination, second() for execution

// (() => {}) this is the method
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Jais')