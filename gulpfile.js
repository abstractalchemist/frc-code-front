const gulp = require('gulp');
const babel = require('babelify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watch = require('gulp-watch');
const mocha = require('gulp-mocha');

require('babel-core/register');

gulp.task('js', function() {

    return browserify('src').transform(babel).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
})


gulp.task('test', function() {
    return gulp.src('test/**/*js').pipe(mocha({require:'test/setup.js', compilers:["js:babel-core/register"]}));
})

gulp.task('default', function() {
    return gulp.watch(['src/**/*js','test/**/*js'], ['test','js', 'copy']);
});

gulp.task('copy', function() {
    return gulp.src('public/*').pipe(gulp.dest('dist'))
});

