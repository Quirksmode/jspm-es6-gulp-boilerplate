'use strict';

var gulp          = require('gulp');
var config        = require('../config');
var browserSync   = require('browser-sync');

gulp.task('move', function() {
    return gulp.src([
            './app/src/modules/**/*',
            './app/src/config.js',
            './app/src/jspm_packages/**/*'
        ], { base: './app/src/' })
        .pipe(gulp.dest('./app/dest'))
        .on('end', function () {
        	browserSync.reload();
        });
});