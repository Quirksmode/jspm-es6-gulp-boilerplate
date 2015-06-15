'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence('styles', 'images', 'svg', 'fonts', 'scripts-inline', 'docs', 'systemjsBuilder', 'inject', cb);

});

// Assign a shortcut task to production
gulp.task('prod', ['production']);