/*
*
* 1.package.json
* node_modules文件导致了项目的文件过多过碎，进行拷贝他人太慢
* 这时候可以通过npm init -y 生成package.json文件记录项目中信息以及依赖信息
* 只需要将该文件拷贝给他人，他们通过npm install就会根据package.json文件中的依赖信息进行下载文件
* 若有开发依赖可以通过npm install --production来避开生产依赖包的下载
*
* 上线依赖：dependencies 开发阶段和上线阶段都要使用到的包
* 开发依赖：devDependencies 只有在开发阶段使用的包
*
* 2.package-lock.json
* 该文件记录了模块与模块之间的依赖关系，锁定模块之间的版本
* 确保下次下载包的时候不会造成依赖版本的问题
*
*
*
*
* 3.模块加载机制
* 若require中填写的是完整的模块名称，则直接找到对应的文件，没有就报错
*
* 若填写的是省略后缀名的，则先在指定目录下查找同名的JS文件
* 没有就查找同名的文件夹下的index.js若还没有
* 就查找同名文件夹下的package.json文件中配置main属性对应的文件
* 在没有就报错
*
* 若填写的只有一个模块名称，则先前往系统模块查找，若没有
* 则前往node_modules文件夹下查找到同名的JS文件，若没有
* 则查找同名的文件夹下的index.js文件，若没有
* 则查找同名文件夹下的package.json文件中配置main属性对应的文件
* 再没有就报错
*
*
*
* */