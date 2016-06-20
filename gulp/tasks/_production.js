'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(cb) {

    cb = cb || function() {};

    global.isProd = true;

    runSequence('styles', 'images', 'svg', 'fonts', 'systemjs-builder', 'inject-index', 'move', cb);

});

// Assign a shortcut task to production
gulp.task('prod', ['production']);
