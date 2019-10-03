//导入http模块
const http = require('http');
//创建服务对象
const server = http.createServer();
//服务对象监听客户端请求并做出回应
server.on(`request`, (req, res) => {
    //设置响应状态码和响应响应头
    res.writeHead(200,{
       "content-type": "text/plain;charset=utf8"
    });

    //获取请求头信息
    console.log(req.headers);
    console.log(req.headers.accept);

    if(req.method == "POST"){
        //请求方法的获取和请求URI
        res.end(`请求的方法为：${req.method},请求的URI为：${req.url}`);
    }else if(req.method == "GET"){
        //请求方法的获取和请求URI
        res.end(`请求的方法为：${req.method},请求的URI为：${req.url}`);
    }else {
        res.end(`没有该方法`);
    }

});
//绑定服务端口号
server.listen(3000);
console.log("服务以开启...");