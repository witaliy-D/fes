import * as esbuild from "esbuild";
import { path } from '../path.js';

//const browserslistrcJS = [
//  "es6",
  // "chrome61",
  // "edge79",
  // "firefox52",
  // "safari12",
//]


export  function js_main() {
  return esbuild.build({
    entryPoints: path.src.js_main,
    bundle: true,
    minify: process.argv.includes('--build') ? true : false,
    outdir: path.build.js_main,
    //target: browserslistrcJS,
  })

}
