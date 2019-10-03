const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const url = require(`url`);
const mime = require(`mime`);

const app = http.createServer();

app.on(`request`, (res, rep) => {
    //响应静态资源
    //获取URI
    let staticPath = url.parse(res.url).pathname;
    //获取文件中文件类型
    let type = mime.getType(staticPath);
    //根据URI获取指定的静态资源
    rep.writeHead(200,{
       "content-type": type
    });
    staticPath = path.join(__dirname, `public`, staticPath);
    console.log(staticPath);
    //根据文件绝对路径读取文件并进行响应
    fs.readFile(staticPath, `utf-8`, (err, doc) => {
        rep.end(doc);
    })

});

app.listen(3000);
console.log("服务端已开启")