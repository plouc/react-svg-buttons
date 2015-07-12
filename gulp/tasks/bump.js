var gulp = require('gulp');
var bump = require('gulp-bump');

function buildBumpTask(type) {
    return function () {
        return gulp.src(['./package.json'])
            .pipe(bump({ type: type }))
            .pipe(gulp.dest('./'))
        ;
    };
}

gulp.task('bump',       buildBumpTask('patch'));
gulp.task('bump:minor', buildBumpTask('minor'));
gulp.task('bump:major', buildBumpTask('major'));