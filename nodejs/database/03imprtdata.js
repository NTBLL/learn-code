/*
*
* 导入数据方式：
*   通过mongodb的mongoimport命令进行导入
*   首先要将mongodb/bin目录配置到环境变量中
*   方式：mongoimport -d 数据库名称 -c 集合名称 --file 要导入的数据文件
*
* */

const mongoose = require(`mongoose`);

mongoose.connect('mongodb://localhost/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    hobbies: Array
});

const User = mongoose.model('users',userSchema);

User.create({
    name: '赵云',
    age: 20,
    password: '123456',
    hobbies: ['打仗','保卫主公']
}).then(doc => console.log(doc));

