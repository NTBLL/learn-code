/*
*
* 1.node模块化概述
*   使用传统JS开发的问题
*   文件依赖问题，文件依赖是根据引入文件的顺序进行依赖
*   全局命名问题，多个文件中若出现相同的变量名称，后续的变量会覆盖前面的变量
*
*   软件中的模块化：将一个应用拆分成多个功能，每一个功能可以看成一个模块，一个模块出现问题
*   不会影响其他模块的正常运行
*
* 2.node模块化开发规范
*   node中一个JS文件可以看成一个模块，模块中定义的变量和函数其他模块不能直接使用
*
*   node可以通过exports/module.exports对象进行导出操作,以module.exprots的为准
*   node可以通过requrie对象进行导入操作，接收的是exprots/module.exprots对象,导入模块的后缀名可以省略
*
*
*
* */
let name = "zs";
let sayHai = () => {
    console.log("sayHi");
};

exports.name = name;
exports.sayHai = sayHai;
