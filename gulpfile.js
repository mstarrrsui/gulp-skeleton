var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('vet', function() {
    gulp.src([
        './src/**/*.js',
        './*.js'
    ])
});