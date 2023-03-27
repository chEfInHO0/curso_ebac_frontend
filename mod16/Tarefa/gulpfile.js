const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')

function compileSass(){
   return gulp.src('./source/style/main.scss')
   .pipe(sourcemaps.init())
   .pipe(sass())
   .pipe(sourcemaps.write('./maps'))
   .pipe(gulp.dest('./build/style/'))
}

function compressJS(){
    return gulp.src('./source/js/*.js')
    .pipe(uglify())
    //.pipe(obfuscate()) O uso tornou o código js inutilizavel
    .pipe(gulp.dest('./build/js'))
}

function compressImg(){
    return gulp.src('./source/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
}

exports.default = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compileSass))
    gulp.watch('./source/js/*.js', { ignoreInitial: false }, gulp.series(compressJS))
    gulp.watch('./source/img/*', { ignoreInitial: false }, gulp.series(compressImg))
}
exports.sass = compileSass