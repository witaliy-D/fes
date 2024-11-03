import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';

export function fontsBuild() {
  return src(path.fonts.buildSrc, { encoding: false })
        .pipe(dest(path.fonts.build))
        //.pipe(browserSync.stream());
}
