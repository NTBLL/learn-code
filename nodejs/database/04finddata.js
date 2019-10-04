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

//查询所有数据
// User.find().then(result => {
//     console.log(result);
// });

//查询指定条件的数据
// User.find({
//     age: 18
// }).then(result => {
//     console.log(result);
// });

//根据范围查询
// User.find({
//     age: {$gt: 17, $lt: 26}
// }).then(result => {
//     console.log(result);
// });

//根据包含的内容进行查询
// User.find({
//     hobbies: {$in: ['打仗']}
// }).then(result => {
//     console.log(result);
// });

//查询指定字段
// User.find().select('name -_id').then(result => {
//     console.log(result);
// });

// 排序查询
// User.find().sort('-age').then(result => {
//     console.log(result);
// });

//分页查询
User.find().skip(2).limit(2).then(result => {
    console.log(result);
});
