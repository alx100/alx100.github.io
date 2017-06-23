var gulp = require('gulp');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('compile', function() {
  return gulp.src('main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gcmq())
      .pipe(autoprefixer(['last 2 versions']))
      .pipe(cleanCSS())
      .pipe(gulp.dest('../css'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
   browserSync.init({
        server: '../',
        notify: false,
        open: true,
        tunnel: 'alx100'
    });
  gulp.watch('**/*.scss', ['compile']);
  gulp.watch('../*.html').on('change', browserSync.reload);
  gulp.watch('../css/*.css').on('change', browserSync.reload);
  gulp.watch('../js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);