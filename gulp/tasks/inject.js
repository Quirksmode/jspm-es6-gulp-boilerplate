'use strict';

var gulp          = require('gulp');
var inject 		  = require('gulp-inject');
var config        = require('../config').html;
var gutil         = require('gulp-util');
var swig          = require('gulp-swig');
var browserSync   = require('browser-sync');
var gutil         = require('gulp-util');

gulp.task('inject', function() {
    return gulp.src('./app/src/index.html')
        .pipe(inject(gulp.src(['./app/dest/assets/js/inline/header.js']), {
            starttag: '<!-- inject:header:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return '<script>' + file.contents.toString('utf8') + '</script>'
            }
        }))
        .pipe(inject(gulp.src(['./app/dest/assets/js/inline/footer.js']), {
            starttag: '<!-- inject:footer:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return '<script>' + file.contents.toString('utf8') + '</script>'
            }
        }))
        .pipe(global.isProd ?
            inject(gulp.src('./app/dest/assets/js/app.js', {read: false}), {
                name: 'app',
                ignorePath: '/app/dest/'
            }) :
            gutil.noop())
        .pipe(gulp.dest('./app/dest'));
});