const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

function compileSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function primeiraFunc(callback){
    console.log('Executando via GULP')
    callback()
}

function dizOi(callback){
    console.log('Oi GULP')
    tchauGulp()
    callback()
}

function tchauGulp(){
    console.log('Tchau GULP')
}

exports.default = gulp.series(primeiraFunc,dizOi) // gulp.parallel(primeiraFunc,dizOi)
exports.oi = dizOi
exports.sass = compileSass
exports.watch = function () {
gulp.watch('./source/styles/*.scss',{ignoreInitial:false},gulp.series(compileSass))
}