import gulp from 'gulp';
const { watch, series } = gulp;
import { path } from '../path.js';
import { copycss } from './copycss.js';
import { copyjs } from './copyjs.js';
import { styles } from './styles.js';
import { js_main } from './js_main.js';
import { html } from './html.js';
//import { php } from './php.js';
import { files } from './files.js';
import { cleanfiles, cleanimg, cleanjs, cleancss } from './clean.js';
import { symbols } from './symbols.js';
import { images } from './images.js';

import addFilePage from "../core/pages.js";
import addFileTemplate from "../core/template.js";
import addFileComponents from "../core/components.js";
import browserSync from "browser-sync";

function reload(done) {
    browserSync.reload();
    done();
}

export function startwatch() {
    watch('./src/components/components.json', { ignorePermissionErrors: true }, addFileComponents);
    watch('./src/template/template.json', { ignorePermissionErrors: true }, addFileTemplate);
    watch('./src/pages/pages.json', { ignorePermissionErrors: true }, addFilePage);

    watch(path.watch.html, { ignorePermissionErrors: true }, html);
    watch(path.watch.scss, { ignorePermissionErrors: true }, styles);
    watch(path.watch.css, { ignorePermissionErrors: true, events: ['change', 'add'] }, copycss);
    watch(path.watch.css, { ignorePermissionErrors: true, events: ['unlink'] }, series(cleancss, copycss, reload));
    watch(path.watch.js_main, { ignorePermissionErrors: true }, series(js_main, reload));
    watch(path.watch.js_dist, { ignorePermissionErrors: true, events: ['change', 'add'] }, copyjs);
    watch(path.watch.js_dist, { ignorePermissionErrors: true, events: ['unlink'] }, series(cleanjs, copyjs, reload));
    //watch(path.watch.php, { ignorePermissionErrors: true }, php);
    watch(path.watch.img, { ignorePermissionErrors: true, events: ['change', 'add'] }, images);
    watch(path.watch.img, { ignorePermissionErrors: true, events: ['unlink'] }, series(cleanimg, images));
    watch(path.watch.svg, { ignorePermissionErrors: true }, symbols);
    watch(path.watch.files, { ignorePermissionErrors: true, events: ['change', 'add'] }, files);
    watch(path.watch.files, { ignorePermissionErrors: true, events: ['unlink'] }, series(cleanfiles, files));
}
