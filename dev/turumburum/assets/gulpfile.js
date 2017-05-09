var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('../css'));
});

gulp.task('watch', function(){
    gulp.watch('**/*.scss', ['sass']);
});

gulp.task('prefix', function () {
    return gulp.src('../css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../css'));
});