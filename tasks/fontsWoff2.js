import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import ttf2woff2 from "gulp-ttf2woff2";

export function fontsWoff2() {
  return src(path.fonts.src, { encoding: false })
        .pipe(ttf2woff2())
        .pipe(dest(path.fonts.dest));
}
