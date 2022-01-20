



// // var str = 'aaddaaddaa'
// // const s = str.replace(new RegExp("[Aa]*{2,}"))

// const { number } = require("prop-types");

// // console.log(str)
// // console.log(a)

// let word = 'aaa11111something102asdkdfaf1948948'

// numbers = ""
// for (i = 0;i < word.length; i++){
//     if(word[i].match('[0-9]')){
//         numbers += word[i];
//     }
// }




var numberPattern = /\d+/g;
console.log('something102asdfkj1948948'.match( numberPattern ).join(''));