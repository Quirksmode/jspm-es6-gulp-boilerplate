'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cmq          = require('gulp-combine-media-queries');
var minifycss    = require('gulp-minify-css');
var gutil        = require('gulp-util');
var gnotify      = require('gulp-notify');

gulp.task('styles', function () {

  return gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .on('error', function() {
        handleErrors;
        gnotify.onError().apply(this, arguments);
        this.emit('end');
    })
    .pipe(autoprefixer("last 2 versions", "ie 9"))
    .pipe(cmq({ log: true }))
    .pipe(global.isProd ? minifycss() : gutil.noop())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.reload({stream:true}));

});