'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;

gulp.task('browser-sync', function() {
  browserSync(config);
});

// Assign a shortcut task to BrowserSync
gulp.task('serve', ['browser-sync']);