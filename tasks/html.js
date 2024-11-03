import gulp from 'gulp';
const { src, dest } = gulp;
import fileinclude from "gulp-file-include";
import { path } from '../path.js';
import parseHTMLClass from "../core/parseHTMLClass.js";
import browserSync from "browser-sync";

global.app = {
  page: []
}

export function html() {
  return src(app.page, { allowEmpty: true })
    .pipe(fileinclude())
    .pipe(parseHTMLClass('src/scss/modifiers/_create.g.scss'))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}
