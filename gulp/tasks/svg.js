'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var del          = require('del');
var svgstore     = require('gulp-svgstore');
var svgmin       = require('gulp-svgmin');

// Create SVG sprite
gulp.task('svg', ['svg-sprite-foreground']);

gulp.task('svg-sprite-foreground', function() {

    // Remove fill attribute
    function transformSvg ($svg, done) {
        $svg.find('[fill]').removeAttr('fill');
        done(null, $svg);
    }

    return gulp
        .src(config.svg.svgforeground.src)
        .pipe(svgmin())
        .pipe(svgstore({
            fileName: 'foreground-icons.' + config.svg.iconFilename,
            transformSvg: transformSvg
        }))
        .pipe(gulp.dest(config.svg.svgforeground.dest));

});