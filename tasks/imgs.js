import gulp from 'gulp';
import imagemin, {mozjpeg, svgo}from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import gulpif from 'gulp-if';

const production = !!process.argv.includes('--production');

const pluginsSvgo = [
  //{
   // name: 'removeViewBox',
   // active: true
  //},
  {
    name: 'removeTitle',
    active: true
  }
];

const pluginsImagemin = [
  mozjpeg({progressive: true}),
  pngquant()
];


export const imgs = () => {
  return gulp.src(['src/img/**/*.{jpg,jpeg,png,svg,gif}', '!src/img/sprite/*', '!src/img/symbols/*', '!src/img/favicon/*', '!src/img/libs/*'])
    .pipe(imagemin([svgo({plugins: pluginsSvgo})]))
    .pipe(gulpif(production, imagemin(pluginsImagemin)))
    .pipe(gulp.dest('dist/img'));
};
