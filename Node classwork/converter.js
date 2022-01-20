


const args = process.argv.slice(2)
regex = /[f,c]/;

// type =  args[1].match(rege)

function tempConverter(temp, type){
    if (regex.test(args[1])){
        if (type == "c"){
            return ( "Celsius " + temp + '\xB0C' + " = " + " Fahrenheit " + ((temp * 1.8) + 32) + "\xB0F")
        }
        else{
            return ( "Fahrenheit " + temp + "\xB0F = " + "Celsius "  + parseInt((temp - 32) * 0.55) + "\xB0C") ;
        }
    }
    else console.log("Please enter f for fahreiheit, c for celcius");
}





console.log(tempConverter(args[0], args[1]))
console.log(args)
