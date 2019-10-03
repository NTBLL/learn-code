const http = require(`http`);
const url = require(`url`);

const app = http.createServer();

app.on(`request`, (res, rep) => {
    let method = res.method.toLowerCase();
    let pathname = url.parse(res.url).pathname;
    rep.writeHead(200, {"content-type": 'text/html;charset=utf8'});
    if (method == `get`) {
        //判断URI进行路由
        if (pathname == '/' || pathname == '/index') {
            rep.end(`这是首页内容`);
        } else if (pathname == `/list`) {
            rep.end(`这是列表内容`);
        } else {
            rep.end(`你要访问的页面不存在`);
        }
    } else if (method == `post`) {

    }
});

app.listen(3000);
console.log("服务端已开启")