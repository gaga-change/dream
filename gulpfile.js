var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;
var config = require('./config.json');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var port = config.port;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: "./",
    port: port || '8080'
  });
  gulp.watch("stylesheet/scss/**/*.scss", ['sass']);
  gulp.watch("./**/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
  return gulp.src(["stylesheet/scss/**/*.scss", "!stylesheet/scss/**/_*.scss"])
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("stylesheet/css"))
  .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);