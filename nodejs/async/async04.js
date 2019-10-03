const fs = require(`fs`);
const promisify = require(`util`).promisify;

let readFile = promisify(fs.readFile);

async function run() {
    let r1 = await readFile('./a.txt','utf-8');
    let r2 = await readFile('./b.txt','utf-8');
    let r3 = await readFile('./c.txt','utf-8');
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

run();