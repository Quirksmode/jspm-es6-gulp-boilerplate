'use strict';

var config        = require('../config');
var gulp          = require('gulp');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var gutil         = require('gulp-util');
var browserSync   = require('browser-sync');

gulp.task('scripts-inline', ['scripts-inline-header', 'scripts-inline-footer']);

gulp.task('scripts-inline-header', function () {
    return gulp.src(config.scriptsinline.header.src)
        .pipe(concat(config.scriptsinline.header.filename))
        .pipe(global.isProd ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.scriptsinline.header.dest))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts-inline-footer', function () {
    return gulp.src(config.scriptsinline.footer.src)
        .pipe(concat(config.scriptsinline.footer.filename))
        .pipe(global.isProd ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.scriptsinline.footer.dest))
        .pipe(browserSync.reload({stream:true}));
});