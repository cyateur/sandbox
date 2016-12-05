var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {



    return browserify({entries: ['./client/pages/homepage.js'], extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('browserify', ["babelify"], function(){

});

gulp.task('watch', ['build'], function () {
    return gulp.watch('client/**/**', ['build']);
});

gulp.task('default', ['watch']);