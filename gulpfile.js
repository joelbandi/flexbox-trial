const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', () =>
  gulp.src('./style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dis'))
);

gulp.task('watch', () => gulp.watch('./style.css',['prefix']));
