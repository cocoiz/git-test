/**
 * 
 * 此文件是Gulp的主文件，用于注册任务。
 * 
 * 此文件中写的代码都是Node.js代码，代码都是有Node执行的。
 * 
 * gulp的具体使用方法可查看gulp的方法网站
 * 
**/
"use strict"; //使用js的严格模式，能提高执行效率。

//引入模块
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



//2.注册一个gulp任务
gulp.task('copy', function(){
	//当gulp执行nihao任务时，会自动执行这个函数。
	gulp.src("./dir01/test.txt")
	.pipe(gulp.dest("./dir02"));
});

//3.注册一个gulp的任务，用于监视./dir01/test.txt文件是否被修改了。
gulp.task('jianshi', function(){
	//gulp.watch('文件名', ['任务名1', '任务名2']);
	gulp.watch('dir01/test.txt', ['copy']);
});

