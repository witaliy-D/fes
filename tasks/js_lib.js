import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import concat from "gulp-concat";


export function js_lib() {
    return src(path.src.js_libraries)
        .pipe(concat("libraries.js"))
        .pipe(dest(path.build.js_libraries))
        //.pipe(browserSync.stream());
}
