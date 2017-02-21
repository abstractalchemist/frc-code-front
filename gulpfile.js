const gulp = require('gulp');
const babel = require('babelify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watch = require('gulp-watch');
const mocha = require('mocha');

require('babel-core/register');

gulp.task('js', function() {
    return watch('src', function() {
	return browserify('src').transform(babel).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
    })
})

gulp.task('default', ['copy']);

gulp.task('copy', function() {
    return gulp.src('public/index.html').pipe(gulp.dest('dist'))
});
