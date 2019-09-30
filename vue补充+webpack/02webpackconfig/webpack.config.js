// webpack的配置文件
const path = require('path');   //导入path模块
//配置
module.exprots = {
    //配置入口文件
    entry: path.join(__dirname, 'src', 'index.js'),
    //配置出口文件
    output: {
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    },
    //模式 production development
    mode: 'production',
    //loader
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }


    //plugin
    //dev-server
};