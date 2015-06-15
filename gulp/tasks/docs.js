'use strict';

var gulp          = require('gulp');
var jsdoc 		  = require('gulp-jsdoc');
var config        = require('../config');

// Documentation
gulp.task('docs', function () {
     'use strict';
     return gulp.src(['./js/**/*.js', './sass/**/*.scss', '../../README.md'])
         .pipe(jsdoc.parser())
         .pipe(jsdoc.generator('docs', {
             path: 'ink-docstrap',
             systemName      : 'Documentation',
             footer          : 'NSPCC',
             copyright       : 'Copyright NSPCC',
             navType         : 'vertical',
             theme           : 'cerulean', // cerulean, cosmo, simplex, united
             linenums        : true,
             collapseSymbols : false,
             inverseNav      : false
         }));
 });