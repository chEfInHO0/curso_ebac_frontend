const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

function compressImgs(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
}


exports.default = compressImgs