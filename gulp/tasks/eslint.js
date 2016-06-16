'use strict';

var config = require('../config');
var gulp   = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src(config.scripts.lint)
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError());
});