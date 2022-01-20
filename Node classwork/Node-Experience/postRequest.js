
const request = require('request');

const url = "https://gorest.co.in/public/v1/users";
const token = "291291423cd0707653a12dee6e49a08098d84b1a80c35504c8813b33edb788b5"


request.post({
    url: url,
    body: JSON.stringify({
        "name": "James bond",
        "email": "hahhaha@gmail.com",
        "gender": "male",
        "status": "active"
    }),
    headers :{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}, (error, response, body) =>{
    if (error){
        console.log("Error :" + error)
        console.log(response)
    }
    else {
        console.log(response)
        console.log(JSON.parse(body).data)
    }
}
)