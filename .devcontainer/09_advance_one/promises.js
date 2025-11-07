//promise creation like we do heap memory allocation in arrays
const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()//connection with the .then function below
    },1000)
}) 

//resolve has a connection with then
promise1.then(function(){
    console.log("Promise is consumed");
})

//Method 2

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 is resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "jaismeet45@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Jais", passw: "123"})
        }
        else{
            reject('ERRor: Something went wrong')
        }
    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {console.log("the promise is either resolved or rejected")}
)

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript",passw: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

//it works only if everything is going alright
async function consumepromise5(){
    try {
        const response = await promise5
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    //promise is an object so we store it in a variable
}
consumepromise5()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))