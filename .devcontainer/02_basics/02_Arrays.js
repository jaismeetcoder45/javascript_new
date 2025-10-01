const heros = ["Harry", "hermione", "Ron"]
const heros2 = ["thor", "Flash", "Ironman"]

// heros.push(heros2)

// console.log(heros);
// console.log(heros[3][1]);//this adds the new element as object 

const all = heros.concat(heros2)
// console.log(all);//this adds them by single elements
// ?/push and concate are same thing 

const all2 = [...heros, ...heros2]//spread values
// console.log(all2);//this also works same as above concate

const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr3 = arr2.flat(Infinity)//gives exact value of depth in () not infinity
// console.log(arr3);

// console.log(Array.isArray("Jaismeet"))
// console.log(Array.from("Jaismeet"))
// console.log(Array.from({name: "Jaismeet"}))//interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//read abour is, from, of functions of array