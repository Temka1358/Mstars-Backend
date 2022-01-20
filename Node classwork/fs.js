const fs = require("fs")
fs.stat('/Users/mstars_lab1_13/Desktop/Back-end/test.txt', (err, stats) =>{
	if(err){
		console.error(err)
	return	
}
	console.log(stats)
})

fs.readFile('/Users/mstars_lab1_13/Desktop/Back-end/test.txt', (err, stats) =>{
        if(err){
                console.error(err)
        return
}
        console.log(stats)
})

content = "Added content!"
fs.writeFile('/Users/mstars_lab1_13/Desktop/Back-end/test.txt', "\n" + content, {flag:'a+'}, err  =>{
        if(err){
                console.error(err)
        return
}
        console.log(content)
})

