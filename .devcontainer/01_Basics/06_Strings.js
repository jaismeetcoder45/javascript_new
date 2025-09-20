// const name = "Jaismeet"
// const repoCount = 50

// console.log(name + repoCount + " value");//this syntax is not recommend
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jaismeet-kaur-Ghatorey')//string declaration
// console.log(gameName[0])
// console.log(gameName[1])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const Str2 = gameName.slice(-14,3)
console.log(Str2);

const Str3 = "     Jais     "//to remove spaces
console.log(Str3)
console.log(Str3.trim())//remove spaces ,works on white space chars only

const url = "https://google.com/jais@gunraj"
console.log(url.replace('@','-'))

console.log(url.includes('my'))

console.log(gameName.split('-'))//split in array at -