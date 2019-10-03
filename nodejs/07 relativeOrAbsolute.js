console.log(__dirname);

const fs = require(`fs`);
const path = require(`path`);

let filePath = './03 require.js';
// filePath = path.join(__dirname, filePath);
fs.readFile(filePath,'utf-8',(err,doc) => {
    console.log(err);
});