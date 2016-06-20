'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('../config');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var inlinesource = require('gulp-inline-source');

gulp.task('inject-index', function() {
    return gulp.src(config.src + '/index.html')

    // Inline any scripts tagged with 'inline'
    .pipe(inlinesource())

    // JSPM - Switches between Dev (Uncompressed) and Prod (Bundled with SystemJS)
    .pipe(
        global.isProd ?
        inject(gulp.src(""), { starttag: '<!-- app:dev:js -->', transform: function(filePath, file) {
                return ""; } }) : inject(gulp.src(""), { starttag: '<!-- app:prod:js -->', transform: function(filePath, file) {
                return ""; } })
    )
    .pipe(gulp.dest(config.dest.templates))
    .pipe(browserSync.reload({ stream: true }));
});
