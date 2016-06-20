'use strict';

var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('move', function() {
    return gulp.src(
            global.isProd ? config.move.prod.src : config.move.dev.src, { base: config.move.base })
        .pipe(gulp.dest(config.move.dest))
        .on('end', function() {
            browserSync.reload();
        });
});
