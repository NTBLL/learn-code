//导入gulp模块
const gulp = require("gulp");
//导入html压缩模块
const htmlmin = require("gulp-htmlmin");
//文件供代码提取
const fileinclude = require('gulp-file-include');
//导入less解释器模块
const less = require(`gulp-less`);
//css压缩模块
const csso = require(`gulp-csso`);
//js语法转换
const babel = require(`gulp-babel`);
//js压缩模块
const uglify = require(`gulp-uglify`);


//入门案例，将helloworld.html拷贝一份到dist目录中
gulp.task(`helloworld`, () => {
    return gulp.src("./src/helloword.html")
        .pipe(gulp.dest("./dist"));
});


//压缩html代码并提取公共部分
gulp.task("htmlmin", () => {
    return gulp.src("./src/*.html")
        .pipe(fileinclude())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

//将less转换为css并对css进行压缩
gulp.task("cssmin", () => {
    return gulp.src(["./src/css/*.less", "./src/css/*.css"])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest("./dist/css"));
});

//将js语法转换为es5语法并进行压缩
gulp.task("jsmin", () => {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify()) //要将ES6的语法转换为ES5语法后才能进行压缩
        .pipe(gulp.dest("./dist/js"));
});


//创建一个统一执行命令，可以将上述任务一起执行,若任务名称为default，则调用的时候可以进行省略
//gulp4.0后要使用gulp.series,gulp4.0以前通过[`htmlmin`, `cssmin`, `jsmin`]
gulp.task('default', gulp.series(`htmlmin`, `cssmin`, `jsmin`));