/*
*
* 1.为什么要学习服务端开发基础
*   紧密配合后端；扩展视野站在更高的角度审视项目；业务逻辑前置；
*
* 2.服务端要做什么
*   实现网站的业务逻辑
*   数据的增删改查
*
* 3.为什么选择node
*   可以直接使用JS开发node
*   一些公司要求掌握node
*   生态圈活跃，第三方的库比较多
*   一些前端工具是由node写的
*
* 4.什么是node
*   node是一个基于Chrome V8引擎的JS运行环境
*
* 5.下载&安装node
*   版本：LTS 长期稳定版本 Current 实验版本
*   下载：https://nodejs.org/en/
*   安装：傻瓜式安装即可
*   验证是否安装成功：node -v
*
*   安装出现的问题：没有使用管理员身份安装，path环境变量没有设置
*
* 6.node组成
*   node是由ECMAScript和node环境提供的API组成，有文件，网络，路径等操作的API
*
*   node中有与浏览器提供window对象类似的对象global,并且有
*   console,settimeout,cleartimeout,setinterval,clearinterval方法
*   且global对象也可以省略
*
*   运行：node js文件
*
*
* */

let a = "zhangsan";
global.console.log(a);
let b = msg => msg;
console.log(b("echo"));
for (let i = 0; i < 3; i++) {
    console.log(i);
}

global.setTimeout(() => {
    console.log("global全局对象");
}, 2000);