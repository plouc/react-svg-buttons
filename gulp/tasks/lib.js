var gulp   = require('gulp');
var path   = require('path');
var babel  = require('gulp-babel');
var config = require('./../config');


gulp.task('lib:build', function () {
    return gulp.src(path.join(config.src, '**/*.js?(x)'))
        .pipe(babel({
            comments:  true,
            modules:   'common'
        }))
        .pipe(gulp.dest(config.dist))
    ;
});
