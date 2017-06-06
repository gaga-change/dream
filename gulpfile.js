var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;
var config = require('./config.json');
var port = config.port;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./",
    port: port || '8080'
  });
  gulp.watch(["./**/*.scss", "!node_modules/**"], ['sass']);
  gulp.watch("./**/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
  return gulp.src(["./**/*.scss", "!node_modules/**", "!./**/_*.scss"])
  .pipe(sass())
  .pipe(gulp.dest("./"))
  .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);