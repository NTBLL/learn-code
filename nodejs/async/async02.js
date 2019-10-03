const fs = require(`fs`);

// fs.readFile(`./a.txt`,'utf-8', (err, doc) => {
//     console.log(doc);
// });
// fs.readFile(`./b.txt`,'utf-8',  (err, doc) => {
//     console.log(doc);
// });
// fs.readFile(`./c.txt`,'utf-8',  (err, doc) => {
//     console.log(doc);
// });

fs.readFile(`./a.txt`,'utf-8', (err, doc) => {
    console.log(doc);
    fs.readFile(`./b.txt`,'utf-8', (err, doc) => {
        console.log(doc);
        fs.readFile(`./c.txt`,'utf-8', (err, doc) => {
            console.log(doc);
        });
    });
});