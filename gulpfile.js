const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: './'
    });
    gulp.watch('scss/*.scss', ['sass']);

    gulp.watch('index.html').on('change', browserSync.reload); 

});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);