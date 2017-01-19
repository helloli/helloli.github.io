var gulp = require('gulp'),
    del = require('del'),
    babel = require('gulp-babel'),
    less = require('gulp-less'),
    gulpSequence = require('gulp-sequence');


gulp.task('clean', function () {
    return del('./amd', {
        force: true
    });
});

gulp.task('babel', function () {
    return gulp.src('./es6/**/*.es6')
        .pipe(babel({
            // 默认转为CMD，这个插件是转换为AMD的，这样才能让require使用
            'plugins': ['transform-es2015-modules-amd'],
            // es6转es5
            'presets': ['es2015']
        }))
        .pipe(gulp.dest('./amd'));
});

gulp.task('less', function () {
    return gulp.src('./es6/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./amd'));
});

gulp.task('default', gulpSequence('clean', ['babel', 'less']));