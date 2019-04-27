// Consts
const gulp = require('gulp'),
      sass = require('gulp-sass');

// Module compiler
sass.compiler = require('node-sass');

// Default
gulp.task('default', watch);

// Compiler SASS
function compileSass(){
    return gulp
    .src("src/scss/**/*.scss").pipe(sass({outputStyle: 'compact'}).on("error", sass.logError)).pipe(gulp.dest("src/css/"));
}

// WATCH
function watch(){
    gulp.watch("src/scss/**/*.scss", compileSass)
    console.log("SASS Runing...")
}