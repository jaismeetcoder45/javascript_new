//variable declaration
const accountId = 144553 //const keyword- cant be changed
let accountEmail = "gstsinghhardeep@gmail.com"//let keyword
var accountPass = "12345"//var keyword
accountCity = "Jaipur"//without also using any keyword we can declare but not prefer it
let accountState;

// lets try to change the values of all above and see what happens
// accountId = 2 -> can't be changed

accountEmail = "hc@hc.com"
accountPass = "245364"
accountCity = "punjab"

console.log(accountId);//printing
console.table([accountId,accountEmail,accountPass,accountCity,accountState])//print in table format

// {} curly braces are scope in js 

/*
prefer not to use var keyword
because of issue in block scope and functional scope
*/