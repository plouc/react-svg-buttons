/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var gulp       = require('gulp');
var path       = require('path');
var ghPages    = require('gulp-gh-pages');
var config     = require('./../config');
var del        = require('del');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var stylus     = require('gulp-stylus');


function getBundler(isDev) {
    var bundler = browserify({
        entries:      config.examples.scripts.map(function (script) {
            return path.join(config.examples.src, 'js', script);
        }),
        extensions:   ['.js', '.jsx'],
        debug:        isDev,
        cache:        {},  // for watchify
        packageCache: {},  // for watchify
        fullPaths:    true // for watchify
    });

    bundler.transform(babelify.configure({
        optional: []
    }));

    return bundler;
}


gulp.task('examples:files', function () {
    return gulp.src(config.examples.files, {
            cwd:  config.examples.src,
            base: config.examples.src
        })
        .pipe(gulp.dest(config.examples.dist))
    ;
});


gulp.task('examples:build', ['examples:files', 'examples:styles'], function () {
    return getBundler(false)
        .bundle()
        .pipe(source(path.join(config.examples.scriptName)))
        .pipe(gulp.dest(path.join(config.examples.dist, 'js')))
    ;
});


gulp.task('examples:styles', function () {
    return gulp
        .src(path.join(config.examples.src, 'styles', config.examples.stylesFile))
        .pipe(stylus())
        .pipe(gulp.dest(path.join(config.examples.dist, 'css')))
    ;
});


gulp.task('examples:watch', function () {

});


gulp.task('examples:publish', ['examples:build'], function () {
    return gulp
        .src(path.join(config.examples.dist, '**/*'))
        .pipe(ghPages())
    ;
});


gulp.task('examples:clean', function (done) {
    del([config.examples.dist], done);
});