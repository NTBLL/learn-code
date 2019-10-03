/*
*
* 服务器基础概述
* 1.网站的组成：客户端+服务器端
*
* 2.node服务器端：在设备上安装node环境，并可以接收客户端的请求和响应客户端
*
* 3.ip：互联网上设备的唯一标识，port：端口设备对外提供的服务
*
* 4.url：统一资源定位符，用于表示互联网上资源的位置
*
*
*
* 通过node构建简单的web服务器
* 导入http模块
* 通过http模块创建服务
* 服务对象通过监听客户端的请求事件，然后进行处理
* 为服务绑定服务端口号
*
*
* Http协议：超文本传输协议，用于规定客户端与服务端数据传输的规则
* HTTP报文
* 请求报文
* 请求行：res.method res.url
* 请求头：res.headers   res.headers[key]
*
* 响应报文
* 响应头&响应状态码：res.writeHead(code,headers)-->content-type
* 响应体：res.end(str)
*
*
*
* 请求参数获取
* GET请求参数，通过获取url，通过字符串操作可以获取到get请求的参数
* node为了方便，提供了url模块对url字符串进行解析操作
* ----url.parse(res.url[,true]) true表示是否把参数转换为对象
*
* POST请求参数，通过res中事件监听方式获取post请求内部的参数
* res.on(data,function(param){}) 表示正在接收参数
* res.on(end,function(){}) 表示参数接收完毕
* 可以通过querystring模块对post参数进行解析
*
*
*
* 路由
* 客户端中浏览器中URI与后台程序进行对应的关系
* nodejs可以通过获取URI，然后根据URI进行响应对应的内容即可
*
*
*
* 访问静态资源
* 静态资源：服务端不需要进行处理，直接响应相同的访问路径，
* 访问到的内容是一样的内容如：html,css,js,image等
* 动态资源：相同的访问路径，访问到的内容结果可能是不一样的内容
*
* 静态资源访问的实现
* 通过fs模块将静态文件读取通过rep.end进行响应即可
* 为了更好的兼容浏览器，需要进行设置头部返回数据的类型
* 可以通过mime模块，来更具文件自动的进行动态获取
*
*
*
* */