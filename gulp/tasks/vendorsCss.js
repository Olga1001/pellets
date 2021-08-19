const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function script() {
  return gulp.src('dev/vendor/*.css')
    .pipe(gulp.dest('dist/vendor/'));
};
