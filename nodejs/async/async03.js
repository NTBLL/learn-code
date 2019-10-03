const fs = require(`fs`);
//通过promise将异步操作封装起来
// let p1 = new Promise((resolve, reject) => {
//     fs.readFile(`./a.txt`, 'utf8', (err, doc) => {
//         resolve(doc);
//     });
// });
// let p2 = new Promise((resolve, reject) => {
//     fs.readFile(`./b.txt`, 'utf8', (err, doc) => {
//         resolve(doc);
//     });
// });
// let p3 = new Promise((resolve, reject) => {
//     fs.readFile(`./c.txt`, 'utf8', (err, doc) => {
//         resolve(doc);
//     });
// });

// p1.then((doc) => console.log(doc));
// p2.then((doc) => console.log(doc));
// p3.then((doc) => console.log(doc));


function p1(){
    return new Promise((resolve, reject) => {
        fs.readFile(`./a.txt`, 'utf8', (err, doc) => {
            resolve(doc);
        });
    });
}

function p2(){
    return new Promise((resolve, reject) => {
        fs.readFile(`./b.txt`, 'utf8', (err, doc) => {
            resolve(doc);
        });
    });
}

function p3(){
    return new Promise((resolve, reject) => {
        fs.readFile(`./c.txt`, 'utf8', (err, doc) => {
            resolve(doc);
        });
    });
}

p1().then((doc) => {
    console.log(doc);
    return p2();
}).then((doc) => {
    console.log(doc);
    return p3();
}).then((doc) => {
    console.log(doc);
});