const request = require("request");
const fs = require('fs')

let data = ""

request('http://52.221.191.153/api/foods', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  data = JSON.parse(body).data
  //console.log(data)

  fs.writeFile('food.txt', 'food name|food price|food stock|food portion\n_____________________________________\n', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  
  for(i =0; i < data.length; i++){
      fs.appendFile('food.txt', data[i].name + " | " + data[i].price + ' | ' + data[i].stock +" | "+ data[i].portion + "\n", function (err) {
        if (err) throw err;
      });


  }
  
});


