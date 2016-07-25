var gulp = require("gulp"),
    connect = require("gulp-connect"),
    webpack = require("webpack"),
    webpackConfig = require("./webpack.config.js")
gulp.task('webpack', function(callback) {
    
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig,
    function(err, stats) {
        callback();
    });
});
gulp.task('webserver', function() {
    connect.server();
});

gulp.task('default', ['webserver'])
