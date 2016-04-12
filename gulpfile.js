'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var filesize = require('gulp-size');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


gulp.task('workflow', function () {

    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(filesize({
            showFiles: true,
            title: 'Pre Min: '
        }))
        .pipe(cssnano({
            autoprefixer: false,
            zindex: false
        }))

        .pipe(filesize({
            showFiles: true,
            title: 'CssNano: '
        }))

    .pipe(gulp.dest('./css/'))

});

gulp.task('javascript', function() {
    gulp.src('./js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/min/'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['workflow']);
    gulp.watch('./js/**/*.js', ['javascript']);
});
