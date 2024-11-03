import gulp from 'gulp';
const { src, dest } = gulp;
import imageminWebp from 'imagemin-webp';
import webpImg from 'gulp-webp';
import { path } from '../path.js';






export function webp () {
    return src(['src/images/**/*.{jpeg,png,jpg,gif}'])
        .pipe(webpImg(imageminWebp({
            lossless: true,
            quality: 100,
            alphaQuality: 100
        })))
        .pipe(dest(path.build.images))
}
