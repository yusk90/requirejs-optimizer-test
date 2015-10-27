'use strict';

var gulp = require('gulp'),
    requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('scripts', function() {
    return gulp.src(['js/*.js'])
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('dist/js'));
});

// Default task
gulp.task('default', ['scripts']);
