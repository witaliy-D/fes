import gulp from 'gulp';

export const fonts = () => {
  return gulp.src(['src/fonts/**/*'], {base: 'src'})
    .pipe(gulp.dest('dist'));
};
