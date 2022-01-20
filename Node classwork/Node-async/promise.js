


const request = require("request")


function printFilms(str, callbackF){
    const myPromise = new Promise((resolved, rejected)=>{
        request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
            if (error) return rejected();
            console.log(str)
            return resolved()
        });
    }) 
    return myPromise;

}


function printAllCallback(){
   printFilms("a", ()=>{})
        .then(()=>{
            return printFilms('b', ()=>{})
        })
            .then(()=> {
                return printFilms('c', ()=>{})
            })
}

printAllCallback();