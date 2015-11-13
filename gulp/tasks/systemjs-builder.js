var gulp   = require('gulp');
var Builder = require('systemjs-builder');
var config = require('../config');
var path = require('path');

/**
 * Create JS production bundle.
 */
gulp.task('systemjs-builder', function (cb) {
    // load SystemJS config from file
    var builder = new Builder();
    builder.loadConfig('./jspm.config.js')
    .then(function() {
        // Change baseURL to match the file system
        builder.config({ baseURL: path.resolve("./") });

        // Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
        return builder.buildSFX(
            config.systemjsBuilder.src,
            config.systemjsBuilder.dest,
            {
                minify: true,
                sourceMaps: true
            });
    }).then(function() {
    	cb();
    }).catch(function(err) {
    	console.error(err);
    });
});