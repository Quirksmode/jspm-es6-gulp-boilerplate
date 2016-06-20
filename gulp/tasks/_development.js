'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('development', ['clean'], function(cb) {

    cb = cb || function() {};

    global.isProd = false;

    runSequence('styles', 'eslint', 'images', 'svg', 'fonts', 'move', 'inject-index', 'watch', cb);

});

// Assign the default task to development
gulp.task('default', ['development']);

// Assign a shortcut task to development
gulp.task('dev', ['development']);
