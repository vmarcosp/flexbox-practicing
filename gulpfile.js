const gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('serve', () => {

    browserSync.init({
        server: './'
    });

    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('css/style.css').on('change', browserSync.reload);

});

gulp.task('default', ['serve']);