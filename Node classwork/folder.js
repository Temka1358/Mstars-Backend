
const fs = require('fs')

const folderName = '/Users/mstars_lab1_13/Desktop/Back-end/createdFolder'

// fs.rename('test.txt', 'renamed.txt', err =>{
// 	if(err){
// 	console.error(err)
// 	return	
// }
// 	console.log("done")
// })


fs.rm("haha", {recursive: true, force: true},err =>{
	if(err){
		throw err;
	}
	console.log("deleted")
})