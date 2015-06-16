var gulp   = require('gulp');
var config = require('../config');
var browserSync   = require('browser-sync');

// Define the watch task
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.scripts.src, ['lint', 'move']);
  gulp.watch(config.html.src,  ['inject', 'swig']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
});