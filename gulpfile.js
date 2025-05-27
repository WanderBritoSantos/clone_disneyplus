const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
   return gulp.src('./src/styles/*.scss')   //aponta para o arquivo que vai ser compilado 
    .pipe(sass({outputStyle:'compressed'})) // comprime o arquivo deixando ele mais compacto
    .pipe(gulp.dest('./dist/css')); //destino do arquivo final compilado 
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}