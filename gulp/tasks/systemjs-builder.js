var gulp   = require('gulp');
var config = require('../config');
var jspm = require('jspm');


/**
 * Create JS production bundle.
 */
gulp.task('systemjs-builder', function (cb) {
    // load SystemJS config from file
    jspm.setPackagePath('.'); // optional
    var builder = new jspm.Builder();

    // Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
    builder.buildStatic(
        config.systemjsBuilder.src,
        config.systemjsBuilder.dest,
        {
            minify: false,
            sourceMaps: false
        }
    ).then(function() {
        cb();
    }).catch(function(err) {
        console.error(err);
    });

});