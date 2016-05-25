var gulp = require('gulp'),
	babel = require('gulp-babel'),
	realFs = require('fs'),
    less = require('gulp-less'),
	gracefulFs = require('graceful-fs');

gracefulFs.gracefulify(realFs);


gulp.task('babel', function() {
	gulp.src('./modules/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('less', function () {
    gulp.src('./asset/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./asset/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./modules/**/*.js', [babel]);

    gulp.watch('./asset/less/*.less', [less]);
});

gulp.task('default', ['watch']);
