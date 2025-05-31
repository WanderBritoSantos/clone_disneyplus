const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin =require('gulp-imagemin');
const newer = require('gulp-newer');

function styles(){
   return gulp.src('./src/styles/*.scss')   //aponta para o arquivo que vai ser compilado 
    .pipe(sass({outputStyle:'compressed'})) // comprime o arquivo deixando ele mais compacto
    .pipe(gulp.dest('./dist/css')); //destino do arquivo final compilado 
}

// function images(){
//     const dest = 'dist/images';
//     return gulp.src('./src/images/**.*',{base: 'src/images'})
//        .pipe(newer(dest))
//        .pipe(imagemin())
//        .pipe(gulp.dest(dest));
// }

function images() {
    return gulp.src('src/images/**/*', { base: 'src/images' })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}



exports.default = gulp.parallel(styles,images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}