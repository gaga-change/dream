const gulp = require('gulp'),
    less = require('gulp-less'),
    scss = require('gulp-scss'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    debug = require('gulp-debug'),
    config = require('./config.json'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber');
config.SCSS_PATH_T = '**/*.scss';
config.HTML_PATH_T = '**/*.html';
config.SCSS_PATH_F = '!**/_*.scss';

/*--------------------------------- 0.1.1 版 -----------------------------*/
/*自动解析scss*/
gulp.task('scss', function () {
    gulp.src([config.SCSS_PATH_T, config.SCSS_PATH_F, '!node_modules/**'])
        .pipe(debug({title: '编译:'}))
        // .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        // .pipe(sourcemaps.init())
        .pipe(scss())
        // .pipe(cssmin())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});
gulp.task('html', function () {
    gulp.src('**/*.html')
        .pipe(connect.reload())
});
gulp.task('connect', function () {
    connect.server({
        root: config.root_path || 'src',
        livereload: true,
        port: config.port || 8080
    })
});
gulp.task('watch', function () {
    gulp.watch([config.SCSS_PATH_T, '!node_modules/**'], ['scss']); //当制定目录下的scss文件发生改变时，调用scss任务
    gulp.watch(config.HTML_PATH_T, ['html']); //当制定目录下的html文件发生改变时，调用scss任务
});
gulp.task('default', ['connect', 'watch']);
/*--------------------------------- 0.2.0 版（停） -----------------------------*/
/*
 gulp.task('scssWatch', function (file) {
 function parseSingleFile(file) {
 //sass编译一个scss文件的方法
 return gulp.src(file)
 .pipe(changed('src/!**!/!*.css'))
 .pipe(debug({title: '编译:'}))
 //         // .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
 //         // .pipe(sourcemaps.init())
 .pipe(scss())
 //         .pipe(cssmin())
 //         // .pipe(sourcemaps.write())
 .pipe(gulp.dest('src'))
 }
 gulp.watch("src/!**!/!*.scss", function (e) {
 console.log('\n文件改变的路径为' + e.path);//e.path 比如 C:\Users\gaga\Desktop\h\src\test02.scss
 parseSingleFile(e.path);
 });
 });*/
