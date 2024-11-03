import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import browserSync from "browser-sync";


export function copyjs() {
  return src(path.src.js_dist)
    .pipe(dest(path.build.js_dist))
    .pipe(browserSync.stream());
}
