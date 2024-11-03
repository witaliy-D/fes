import browserSync from "browser-sync";
import { way } from '../path.js';

export function browser_sync() {
    browserSync.init({
        server: {
            baseDir: way,
            index: 'index.html'
        },
        online: true,
    })
}
