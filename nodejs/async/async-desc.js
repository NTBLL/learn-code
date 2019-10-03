/*
*
* 1.同步&异步
* 同步与异步的执行问题
* 同步API是在当前API执行完毕后，继续往下执行
* 异步API是与其他无关，单独开辟一条路径开始执行
* //同步>异步>回调
*
* 同步与异步的获取返回值
* 同步可以通过函数的返回值也可以通过回调函数
* 异步只能通过回调函数方式获取返回值
*
*
* 2.node的异步函数
* node中的文件读取和监听事件都是异步的
* 现在需求读取A,B,C依次读取这三个文件，，
* ---回调地狱，，程序中不建议使用
*
*
* 3.使用es6的promise语法解决回调地狱问题
* promise的基本使用---就是将异步函数进行了封装
* new Promise(resovle,reject)       //resovle用于处理成功的函数，reject用于处理失败的函数
* 然后通过then(resovle),catch(reject)方法进行处理
*
*
* 4.使用es7的异步函数解决回调地狱的问题
* 异步编程的最终解决方案
* 异步函数的基本使用
* async () => {} 或者 async function (){}
*
* 特点：
* 默认返回的是promise对象
* 若指定了返回值，则会将返回的内容当作promise对象的属性
*
* return就类似promise语法中的resovle回调函数
* throw就类似promise语法中的reject回调函数
*
* await关键字
* 只能用在异步函数中，且后面要跟者可以返回promise对象的表达式
* 用于暂定异步函数，直至后面的promise对象返回
*
* node提供了一个可以将不返回promise对象的方法转换为可以返回promise对象的方法
* promisify
*
*
*
*
* */