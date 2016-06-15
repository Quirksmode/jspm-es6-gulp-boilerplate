'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var mmq          = require('gulp-merge-media-queries');
var minifycss    = require('gulp-minify-css');
var gutil        = require('gulp-util');
var gnotify      = require('gulp-notify');
var sassLint     = require('gulp-sass-lint');

gulp.task('sass-lint', function () {
    return gulp.src(config.sassLint.src)
        .pipe(sassLint(config.sassLint.options))
        .pipe(sassLint.format())
        // .pipe(sassLint.failOnError())
});

gulp.task('styles', ['sass-lint'], function () {

  return gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      //sourceMap: 'sass', // disabled, seems .map files are not being copied, creating 404 errors
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .on('error', function() {
        handleErrors;
        gnotify.onError().apply(this, arguments);
        this.emit('end');
    })
    .pipe(autoprefixer("last 2 versions", "ie 9"))
    .pipe(mmq({ log: true }))
    .pipe(global.isProd ? minifycss() : gutil.noop())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.reload({stream:true}));

});