var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var gulpprint = require('gulp-print');

gulp.task('vet', function() {
    return gulp
        .src([
            './src/**/*.js',
            './*.js'
        ])
        .pipe(gulpprint())
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});