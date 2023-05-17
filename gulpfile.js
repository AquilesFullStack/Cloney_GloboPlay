const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles(){ //entrada e saida de arquivos comprimidos
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){//compressão de imagens
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe (uglify())
    .pipe(gulp.dest('./dist/js'))
}


exports.default = gulp.parallel(styles, images, scripts)

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}
