/*
*
* 系统模块：node环境提供的API
*
* fs系统模块：用于操作文件的API
*   读取文件方法：
*   fs.readFile(文件路径[,字符编码],callback(err,doc))
*   写入文件方法：
*   fs.writeFile(文件路径,数据[,数据编码等信息],callback(err))
*
* path系统模块：用于操作系统的路径的API
*   由于不同的操作系统的路径拼接符号不同不能写死，而是通过join方法获取系统的拼接符进行拼接
*   拼接路径：
*   path.join(路径,路径...)
*
* 相对路径&绝对路径
*   nodejs中一般使用绝对路径，导入模块可以使用相对路径
*   一般相对路径是相对命令行窗口中的所在路径，但是requrie中导入是相对当前文件所在路径
*   绝对路径：可以使用__dirname属性获取当前文件的绝对路径，通过path模块进行拼接即可
*
*
*
* */
const fs = require('fs');

//读取文件&写入文件
fs.readFile('./03 require.js', 'utf-8', (err, doc) => {
    if (err == null) {
        console.log(doc);
    } else {
        fs.writeFile('./err.txt', '读取文件失败', 'utf-8', err => {
            if (err == null) {
                console.log("文件写入成功!");
            }
        });
    }
});
