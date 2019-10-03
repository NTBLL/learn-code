//导入http模块
const http = require('http');
//引入url模块
const url = require(`url`);
//引入querystring模块
const querystring = require(`querystring`);
//创建服务对象
const server = http.createServer();
//服务对象监听客户端请求并做出回应
server.on(`request`, (req, res) => {
    //请求参数获取
    if (req.method.toUpperCase() === "GET") {
        let {username, password} = url.parse(req.url, true).query;
        res.end(`<h1>welcome ${username} yours password is ${password}</h1>`);
    }
    if (req.method.toUpperCase() === "POST") {
        let params = ``;
        req.on(`data`, param => params += param);
        req.on(`end`, () => {
            let {username,password} = querystring.parse(params);
            res.end(`<h1>welcome ${username} yours password is ${password}</h1>`);
        });
    }
});
//绑定服务端口号
server.listen(3000);
console.log("服务以开启...");