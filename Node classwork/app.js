
// const car = require('./car')

// console.log(car)

// const petsArray = ['dog','cat', 'bird', 'horse', 'camel']

// console.table(car)
// console.assert(petsArray.length > 10)


// console.log('My %s has %d years', 'cat', 2)


let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2]

console.log(`Your word is ${word}`)

let wordArray = [];

for (let i =0; i<1000; i++){
    wordArray.push (`${word} count: ${i}`)
}


console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop ad elem to the array, tjhe process us using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory`);