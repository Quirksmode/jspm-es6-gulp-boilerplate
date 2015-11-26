'use strict';

var gulp          = require('gulp');
var inject        = require('gulp-inject');
var config        = require('../config');
var gutil         = require('gulp-util');
var browserSync   = require('browser-sync');
var swig          = require('gulp-swig');

gulp.task('inject', ['move-templates'], function() {
    return gulp.src(config.dest.templates + '/index.html')

    	// header scripts
        .pipe(inject(gulp.src([config.dest.assets + '/js/inline/header.js']), {
            starttag: '<!-- inject:header:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return '<script>' + file.contents.toString('utf8') + '</script>'
            }
        }))

        // footer scripts
        .pipe(inject(gulp.src([config.dest.assets + '/js/inline/footer.js']), {
            starttag: '<!-- inject:footer:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return '<script>' + file.contents.toString('utf8') + '</script>'
            }
        }))
        // removes dev/prod javacript includes
        .pipe(
        	global.isProd ?
        		inject(gulp.src(""), {starttag: '<!-- app:dev:js -->', transform: function (filePath, file) { return ""; } })
        		: inject(gulp.src(""), {starttag: '<!-- app:prod:js -->', transform: function (filePath, file) { return ""; } })
        )
        .pipe(swig({
          defaults: {
            cache: false
          }
        }))
        .pipe(gulp.dest(config.dest.templates))
        .on('end', function () {
            browserSync.reload();
        });
});