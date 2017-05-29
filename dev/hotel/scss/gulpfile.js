var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  return (gulp
      .src("style.scss")
      .pipe(sass().on("error", sass.logError))
      // .pipe(sass({outputStyle:'compressed'}))
      .pipe(gulp.dest("../css")) );
});

gulp.task("watch", function() {
  gulp.watch("**/*.scss", ["sass"]);
});

gulp.task("prefix", function() {
  return gulp.src('../css/style.css')
    .pipe(autoprefixer({
        browsers: ["last 3 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("../css"));
});
