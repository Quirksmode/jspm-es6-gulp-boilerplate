'use strict';

var gulp          = require('gulp');
var config        = require('../config');

gulp.task('move-jspm', function() {
    return gulp.src(
        global.isProd ? config.moveJSPM.prod.src : config.moveJSPM.dev.src,
        { base: config.moveJSPM.base })
    .pipe(gulp.dest(config.moveJSPM.dest));
});