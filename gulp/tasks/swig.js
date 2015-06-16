'use strict';

var gulp          = require('gulp');
var swig          = require('gulp-swig');
var browserSync   = require('browser-sync');

gulp.task('swig', ['inject'], function() {
    return gulp.src([
            './app/src/**/*.html',
            '!./app/src/**/*.tpl.html',
            '!./app/src/jspm_packages/**/*'
        ])
        .pipe(swig({
          defaults: {
            cache: false
          }
        }))
        .pipe(gulp.dest('./app/dest'))
        .pipe(browserSync.reload({stream:true}));
});