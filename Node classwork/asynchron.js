const fs = require("fs")


console.log('Before')

fs.readFile('test2.txt', function(err, data){
    console.log("During");
    console.log(data.toString())
})
console.log("After")