var gulp = require("gulp");
var plumber = require('gulp-plumber');
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");


gulp.task('less', function () {
  return gulp.src('main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('../css'));
});

gulp.task("watch", function() {
  gulp.watch("**/*.less", ["less"]);
});

gulp.task('prefix', function() {
  return gulp.src('../css/main.css')
    .pipe(autoprefixer({
        browsers: ["last 3 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("../css"));
});
