//array 

//declaration
const arr = [20, 11, 22, 36, 64, 65, true, "Jaismeet"]
const hero = ["HarryPotter", "Arjun"]

const arr2 = new Array(1,2,3,4)

// console.log(arr[0]);//indexing starts from 0 as always
// console.log(arr2);

//shallow copy - copy have same element 
//deep copy - copy does not share same reference

//methods in arrays

// arr.push(6)//put elements in an array
// console.log(arr);
// arr.push(7);
// console.log(arr);

// arr.pop()//remove last element

// arr.unshift(9);//put 9 at first
// arr.shift();//remove the array

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(20));

// console.log(arr);

const array = arr.join()

// console.log(typeof arr);
// console.log(arr);
// console.log(typeof array);
// console.log( array);

//slice, splice

console.log("A", arr);
const myn1 = arr.slice(1,3);

console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1,3);
console.log("C ", arr);

console.log(myn2);
