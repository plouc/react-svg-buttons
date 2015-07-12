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
var del        = require('del');
var babel      = require('gulp-babel');
var config     = require('./../config');
var revertPath = require('gulp-revert-path');

gulp.task('lib:clean', function (done) {
    del([config.dist], done);
});

gulp.task('lib:build', function () {
    return gulp.src(path.join(config.src, '**/*.{js,jsx}'))
        .pipe(babel({
            comments:  true,
            modules:   'common'
        }))
        .pipe(revertPath())
        .pipe(gulp.dest(config.dist))
    ;
});
