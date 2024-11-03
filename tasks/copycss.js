import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import browserSync from "browser-sync";


export function copycss() {
  return src(path.src.css)
    .pipe(dest(path.build.copycss))
    .pipe(browserSync.stream());
}
