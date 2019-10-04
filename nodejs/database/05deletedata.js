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

//删除一条数据
// User.findOneAndDelete({password: '123'}).then(doc => console.log(doc));

//删除多条数据
User.deleteMany().then(doc => console.log(doc));