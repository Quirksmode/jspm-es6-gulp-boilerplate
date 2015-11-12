'use strict';

var gulp = require('gulp');

gulp.task('ci-lint', ['lint']);

gulp.task('ci-test', ['test']);

// Run all validation and test tasks during CI
gulp.task('ci-all', ['ci-lint', 'ci-test']);