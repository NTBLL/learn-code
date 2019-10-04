const mongoose = require(`mongoose`);

//若连接的数据库不存在，则会自动创建数据
mongoose.connect('mongodb://localhost/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));
