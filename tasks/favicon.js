import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';


export function favicon() {
  return src(path.src.favicon, { encoding: false })
    .pipe(dest(path.build.favicon))
}
