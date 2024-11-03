import gulp from 'gulp';
const { src, dest } = gulp;
import psmq from "postcss-sort-media-queries";
import autoprefixer from "autoprefixer";
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sourcemaps from "gulp-sourcemaps";
import gulpSass from "gulp-sass";
import * as dartSass from 'sass';
import postcss from "gulp-postcss";
const sass = gulpSass(dartSass);
import browserSync from "browser-sync";

import { path } from '../path.js';


const postCssPlugins = [
    psmq(),
    autoprefixer({
        flexbox: false,
    }),
];

const onError = function (err) {
    notify.onError({
        title: 'Error in scss task',
        message: 'Error: <%= error.message %>',
        sound: 'Beep'
    })(err);
    this.emit('end');
};


export function styles() {
    return src(path.src.scss)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(postCssPlugins))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream());
}

export function stylesBuild() {
    return src(path.src.scss)
      .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss(postCssPlugins))
        .pipe(dest(path.build.css));
}
