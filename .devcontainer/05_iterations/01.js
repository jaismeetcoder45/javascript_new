//for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);   
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(`inner loop vale ${j} and loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);       
    } 
}

let arr = ["flash", "batman", "superman"]
// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if(i==5){
        continue;
    }
    console.log(`value of i is ${i}`);
}