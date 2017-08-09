const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css');

gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: './'
    });
    gulp.watch('scss/*.scss', ['sass']);

    gulp.watch('index.html').on('change', browserSync.reload);

});

gulp.task('move-files', ['sass'], () => {
    gulp.src(['./index.html', 'img/**/*'], { base: '.' })
        .pipe(gulp.dest('docs'));
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('docs/css'));
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', ['move-files','minify-css']);