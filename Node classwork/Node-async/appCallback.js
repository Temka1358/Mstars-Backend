
const request = require("request")


function printFilms(str){

        request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
            //data = JSON.parse(body).data
            //console.log(body)
            console.log(str)
        });
}

function printAllCallback(){
    printFilms("A", ()=>{
        printFilms("B", ()=>{
            printFilms("C", ()=>{

            })
        })
    })
}
printAllCallback();