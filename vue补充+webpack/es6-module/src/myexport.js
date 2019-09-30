//导出单个值

/*
*
*
* 浏览器的导入，导出模块：AMD requireJS
* define([],fn) require([],fn)
*
* 服务端的导入，导出模块：nodejs CommonJS
* requrie() module.exports = {}
*
*
* */
export let name = "zs";
//导出多个值
let age = 18;
let sex = '男';
export {age,sex};

export default {
    xiaohua: 1,
    xiaoli: 2
}