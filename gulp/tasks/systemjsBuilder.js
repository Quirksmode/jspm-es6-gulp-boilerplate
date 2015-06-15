var gulp   = require('gulp');
var Builder = require('systemjs-builder');
var config = require('../config').builder;
var path = require('path');

/**
 * Create JS production bundle.
 */
gulp.task('systemjsBuilder', function (cb) {
    // load SystemJS config from file
    var builder = new Builder();
    builder.loadConfig('./app/src/config.js')
    .then(function() {
        // Change baseURL to match the file system
        builder.config({ baseURL: path.resolve('./app/src/') });

        // Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
        return builder.buildSFX('modules/main', './app/dest/assets/js/app.js', {minify: true, sourceMaps: true});
        }).then(function() {
          cb();
        }).catch(function(err) {
        console.error(err);
    });
});