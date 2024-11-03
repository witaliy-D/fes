import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import svg from 'gulp-svg-sprite';
import imagemin, { svgo } from 'gulp-imagemin';
import browserSync from "browser-sync";

const pluginsSvgo = [
  {
    name: 'removeViewBox',
    active: false
  },
  {
    name: 'removeTitle',
    active: true
  }
];


export function symbols() {
  return src(path.src.svg)
    .pipe(imagemin([svgo({ plugins: pluginsSvgo })]))
    .pipe(svg({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest(path.build.svg))
    .pipe(browserSync.stream());
}

