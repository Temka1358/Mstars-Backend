

// var url = require("url");

// host = url.parse("https://meet.google.com/wfq-fvxq-mho", true).host;

// console.log(host)


var http = require("http")
var url = require('url')

http.createServer(function (request, response){
    var cookies = request.headers.cookies;
    console.log("-----")
    console.log(cookies)
    console.log("--------")
    if (!cookies){
        coockieText = "This is cookie text"
        response.setHeader('Set-Cookie', coockieText)
        return response.end(`<h1>${coockieText}</h1>`)
    }
    return response.end()
}).listen(3001)


console.log(url.parse('localhost:3001'))
