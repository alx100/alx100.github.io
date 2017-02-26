var gulp = require('gulp');
var sass = require('gulp-sass');
// var livereload = require('gulp-livereload');
// concat = require('gulp-concat'),
// sass = require('gulp-sass');



gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../'));
    // .pipe(livereload());
});

gulp.task('sass:watch', function() {
    // livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']);
});

// gulp.task('sass:watch', function() {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });



// gulp.task('hello', function() {
//     console.log('Hello Zell');
// });
// gulp.task('default', function() {
//   return gulp.src('sass/**/*.scss')
//     .pipe(concat('style.min.css'))
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('../'));
// });

// gulp.task('default', function() {
//     return gulp.src('sass/main.scss')
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(gulp.dest('../'));
// });


// gulp.task('sass:watch', function() {
//     gulp.watch('sass/**/*.scss', ['default']);
// });