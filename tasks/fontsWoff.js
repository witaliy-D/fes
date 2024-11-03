import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import ttf2woff from "gulp-ttf2woff";

export function fontsWoff() {
    return src(path.fonts.src)
        .pipe(ttf2woff())
        .pipe(dest(path.fonts.dest));
}
