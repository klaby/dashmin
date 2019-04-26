const gulp = require('gulp'),
      sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);

gulp.task('sass', compileSass);

function compileSass(){
    return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({outputStyle: ''}).on("error", sass.logError))
    .pipe(gulp.dest("src/css/"));
}

function watch(){
    gulp.watch("src/scss/**/*.scss", compileSass)
    console.log("SASS Runing...")
}