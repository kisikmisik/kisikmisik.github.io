var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task("fonts", function () {
  return gulp.src(["app/fonts/**/*.{woff,woff2}"])
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function () {
  return gulp.src("app/img/**/*.{png,jpg,svg}")
  .pipe(gulp.dest("dist/img"))
});

gulp.task("js", function () {
  return gulp.src("app/js/**/*.js")
  .pipe(gulp.dest("dist/js"))
});

gulp.task("html", function () {
  return gulp.src("app/**/*.html")
  .pipe(gulp.dest("dist"))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
});
gulp.task('default', gulp.parallel('sass', 'fonts', 'images', 'html', 'js'));
