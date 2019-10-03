/*
*
* 1.gulp是什么
* gulp是基于node的前端构建工具
*
* 2.gulp能做什么
* gulp可以将机械化操作编写成任务，通过命令执行命令任务，从而达到高效的开发
* 为了编写gulp任务，为其提供了一些列插件如：
*   代码压缩相关插件 gulp-htmlmin,gulp-csso,gulp-uglify
*   less文件转换css插件 gulp-less
*   es6语法转换为es5语法 gulp-babel
*   公共头部抽取 gulp-file-include
*   //官网有相关案例：npmjs.com/package
*
* 3.gulp的基本使用
*   本地下载gulp:npm install gulp
*   并下载gulp对应的命令行工具：npm install gulp-cli -g
*   创建gulpfile.js文件
*   为项目创建src和dist目录
*   在gulpfile文件中编写任务
*   通过gulp命令执行任务
*
*   gulp提供编写任务的API
*   获取要进行处理的文件gulp.src(字符串/字符串数组)
*   处理后的文件输出位置gulp.dest(目标文件夹)
*   编写任务gulp.task(任务名称,任务处理回调函数)
*   监控文件变化gulp.watch()
*
*
* */