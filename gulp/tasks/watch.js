var gulp   = require('gulp');
var config = require('../config');

// Define the watch task
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.scripts.src, ['lint', 'move']);
  gulp.watch(config.html.src,  ['inject']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
});