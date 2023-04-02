const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglifycss = require('gulp-uglifycss')

function compressImg(){
    return gulp.src('./src/img')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}

function compressCss(){
    return gulp.src('./build/style/main.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./build/style/main.min.css'))
}

exports.default = gulp.series(compressImg,compressCss)