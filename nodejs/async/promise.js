const fs = require(`fs`);
//promise的基本使用
let promise = new Promise((resolve, reject) => {
    fs.readFile(`./a2.txt`,`utf-8`,(err,doc) => {
       if(err != null){
           reject(err);
           return;
       }
       resolve(doc);
    });
});

promise.then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});