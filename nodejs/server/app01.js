//导入http模块
const http = require('http');
//创建服务对象
const server = http.createServer();
//服务对象监听客户端请求并做出回应
server.on(`request`, (req, res) => {
    //做出响应
    res.end(`<h1>hello server</h1>`);
});
//绑定服务端口号
server.listen(3000);
console.log("服务以开启...");