import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import include from 'gulp-include';


export function js_libs() {
    return src(path.src.js_libs)
        .pipe(include())
        .pipe(dest(path.build.js_libs))
    //.pipe(browserSync.stream());
}
