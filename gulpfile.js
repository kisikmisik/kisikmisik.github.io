var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
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
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
