var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        },

        port: 8080
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./**/*').on('change', browserSync.reload);
}

exports.watch = watch;