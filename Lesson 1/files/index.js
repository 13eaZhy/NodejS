// using module file system

// folders & files

var fs = require('fs'); // globally installed

// 1) Write the text "Hello file !" inside hello.txt
fs.writeFileSync("./hello.txt","Hello file!");
setTimeout(function(){
    fs.unlinkSync("./hello.txt");
},5000);

// console.log(fs);