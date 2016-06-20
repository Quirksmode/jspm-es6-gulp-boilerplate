'use strict';

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var config = require('../config');
var jsdocConfig = require('../../jsdocConfig');

gulp.task('docs.js', [], function() {
    var gulpDocs = require('gulp-ngdocs');
    return gulp.src(config.docs.js.src)
        .pipe(gulpDocs.process())
        .pipe(gulp.dest(config.docs.js.dest));
});
