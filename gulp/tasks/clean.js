'use strict';

var config = require('../config');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
    del([config.dest.templates, config.dest.assets], { force: true }).then(function(paths) {
        cb()
    });
});
