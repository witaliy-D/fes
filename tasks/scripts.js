import gulp from 'gulp';
const { src, dest } = gulp;
import plumber from 'gulp-plumber';
//import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
// import rename from 'gulp-rename';
//import include from 'gulp-include';
import babel from 'gulp-babel';
//import terser from 'gulp-terser';
//import debug from 'gulp-debug';
import browserSync from "browser-sync";

import { path } from '../path.js';

//const production = !!process.argv.includes('--production');

export function scripts() {
  return src(path.src.js_main)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    //.pipe(include())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    // .pipe(gulpif(production, terser()))
    // .pipe(gulpif(production, rename({suffix: '.min'})))
    .pipe(dest(path.build.js_main))
    .pipe(browserSync.stream());
    //.pipe(debug({title: 'JS'}));
};
