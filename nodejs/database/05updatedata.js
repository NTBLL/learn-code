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

const User = mongoose.model('users', userSchema);

//修改单个
// User.updateOne(
//     {name: '赵云'},
//     {name: '常山赵子龙'}
// ).then(doc => console.log(doc));

//修改多个
// User.updateMany(
//     {password: 'lxy123456'},
//     {password: '123'}
// ).then(doc => console.log(doc));
