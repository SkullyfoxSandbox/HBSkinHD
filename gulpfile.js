'use strict';

const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        concat          = require('gulp-concat'),
        autoprefixer    = require('gulp-autoprefixer'),
        rename          = require('gulp-rename'),
        sourcemaps      = require('gulp-sourcemaps');

const   browserSync     = require('browser-sync');

gulp.task('build-sass', () => {
    return gulp.src(['src/scss/build.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('start', ['browserSync', 'build-sass'], function(){
    gulp.watch('src/scss/*',['build-sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('dist/js/*.js', browserSync.reload);
});