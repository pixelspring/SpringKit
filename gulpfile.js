'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var filesize = require('gulp-size');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// ------------------------------------------------
// Sass:
// ------------------------------------------------
// (1)  Compile Sass
// (2)  Add vendor prefixes w/autoprefixer
// (3)  Display filesize
// (4)  Minify with css-nano
// (5)  Display Minified filesize
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
// (1)  Compress with Uglify
// ------------------------------------------------
gulp.task('javascript', function() {

    gulp.src('./js/**.js')
        .pipe(filesize({
            showFiles: true,
            title: 'Pre Ugly: '
        }))
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(concat('main.min.js'))
        .pipe(filesize({
            showFiles: true,
            title: 'Uglified: '
        }))
        .pipe(gulp.dest('./js/min/'));

});


// ------------------------------------------------
// Watchers:
// ------------------------------------------------
gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['javascript']);
});
