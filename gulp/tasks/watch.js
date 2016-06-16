var gulp   = require('gulp');
var config = require('../config');
var browserSync   = require('browser-sync');

// Define the watch task
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.scripts.src, ['eslint', 'move']);
  gulp.watch(config.moveTemplates.src,  ['inject-index', 'move']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
});