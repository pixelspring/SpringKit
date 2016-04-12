'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var filesize = require('gulp-size');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// ------------------------------------------------
// Sass Compilation:
// ------------------------------------------------
gulp.task('sass', function () {

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

// ------------------------------------------------
// JavaScript:
// ------------------------------------------------
gulp.task('javascript', function() {

    gulp.src('./js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/min/'));

});


// ------------------------------------------------
// Watchers:
// ------------------------------------------------
gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['javascript']);
});
