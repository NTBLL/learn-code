const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

//向数据库中添加一条集合并插入一条数据
//设置集合规则
const courseSchema = mongoose.Schema({
    courseName: String,
    courseAuthor: String,
    isPublished: Boolean
});

//创建集合实例
const Course = mongoose.model('courses', courseSchema);

//向集合中添加数据，方式一
// const course = new Course({
//     courseName: 'HTML&CSS',
//     courseAuthor: '张三',
//     isPublished: true
// });
// course.save();

//向集合中添加数据，方式二
Course.create({
    courseName: 'JavaScript课程',
    courseAuthor: '李四',
    isPublished: true
}).then(doc => console.log(doc))
    .catch(err => console.log(err));


