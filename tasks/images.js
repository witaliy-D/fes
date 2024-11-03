import gulp from 'gulp';
const { src, dest } = gulp;
import imagemin, { mozjpeg, svgo } from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import { path } from '../path.js';
import browserSync from "browser-sync";

const pluginsImagemin = [
    mozjpeg({ progressive: true }),
    pngquant()
];

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


export function images() {
  return src(path.src.images, { encoding: false })
        .pipe(imagemin([svgo({ plugins: pluginsSvgo })]))
        .pipe(dest(path.build.images))
        .pipe(browserSync.stream());
}

export function imagesBuild() {
  return src(path.src.images, { encoding: false })
        .pipe(imagemin([svgo({ plugins: pluginsSvgo })]))
        .pipe(imagemin(pluginsImagemin))
        .pipe(dest(path.build.images))
}
