var gulp   = require('gulp');
var config = require('../config');
var browserSync   = require('browser-sync');

// Define the watch task
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.scripts.src, ['lint', 'move']);
  gulp.watch(config.moveTemplates.src,  ['scripts-inline', 'move', 'inject']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images', 'svg']);
});