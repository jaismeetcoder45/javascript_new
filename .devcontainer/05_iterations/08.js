//reduce

const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc+currVal
// },3)//her any value value after, is given to accumilator for initail

// const myTotal = myNum.reduce((acc,curr) => acc+curr, 0)

// console.log(myTotal);

const shoopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "c++ course",
        price: 3999
    },
    {
        itemName: "mobile course",
        price: 5999
    }
]

const priceToPay = shoopingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);
//it calculates the total value of price to pay will hepl us in real life scenarios