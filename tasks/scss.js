import gulp from 'gulp';
import mqpacker from 'postcss-sort-media-queries';
import autoprefixer from 'autoprefixer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import postcss from 'gulp-postcss';
const sass = gulpSass(dartSass);
import server from 'browser-sync';


import gulpif from 'gulp-if';

//import objectFitImages from 'postcss-object-fit-images';
import inlineSVG from 'postcss-inline-svg';
import atImport from 'postcss-import';
//import cleancss from 'gulp-clean-css';
// import rename from 'gulp-rename';
import debug from 'gulp-debug';


// import webpcss from 'webp-in-css/plugin.js';


const production = !!process.argv.includes('--production');

// const cleancssOption = {
//   level: {
//     1: {
//       specialComments: 0,
//       removeEmpty: true,
//       removeWhitespace: true
//     },
//     2: {
//       mergeMedia: true,
//       removeEmpty: true,
//       removeDuplicateFontRules: true,
//       removeDuplicateMediaBlocks: true,
//       removeDuplicateRules: true,
//       removeUnusedAtRules: false
//     }
//   }
// };

// Список и настройки плагинов postCSS
const postCssPlugins = [
  mqpacker({sort: 'mobile-first'}),
  // webpcss(),
  autoprefixer({grid: true}),
  atImport(),
  inlineSVG(),
  //objectFitImages()
];


export const scss = () => {
  const onError = function (err) {
    notify.onError({
      title: 'Error in scss task',
      message: 'Error: <%= error.message %>',
      sound: 'Beep'
    })(err);
    this.emit('end');
  };
  return gulp.src('src/scss/main.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss(postCssPlugins))
    // .pipe(gulpif(production, cleancss(cleancssOption)))
    // .pipe(gulpif(production, rename({suffix: '.min'})))
    .pipe(gulpif(!production, sourcemaps.write('.')))
    .pipe(debug({title: 'scss'}))
    .pipe(gulp.dest('dist/css'))
    .on('end', server.reload);
};
