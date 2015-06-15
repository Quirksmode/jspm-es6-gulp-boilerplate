'use strict';

var config = require('../config').scripts;
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(config.lint)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});