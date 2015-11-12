'use strict';

var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var config        = require('../config');

gulp.task('move-templates', function() {
    return gulp.src(config.moveTemplates.src)
        .pipe(gulp.dest(config.moveTemplates.dest));
});