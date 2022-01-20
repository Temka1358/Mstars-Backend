 const request = require("request")
 const fs = require("fs")

// function printFilms(str){

//     request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
//         //data = JSON.parse(body).data
//         //console.log(body)
//         console.log(str)
//     });
// }
// function printAll(){
//     printFilms("A")
//     printFilms("B")
//     printFilms("C")
// }

// printAll();


// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("Program Ended")

fs.readFile('input.txt', function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("Program ended")