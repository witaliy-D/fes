import { deleteAsync } from 'del';
import { path } from '../path.js';

export function cleandest() {
  return deleteAsync(path.clean);
}

export function cleanimg() {
  return deleteAsync(path.cleanimg);
}

export function cleanfiles() {
  return deleteAsync(path.cleanfiles);
}

export function cleanjs() {
  return deleteAsync(path.cleanjs);
}

export function cleancss() {
  return deleteAsync(path.cleancss);
}

export function cleanlibs() {
  return deleteAsync(path.cleanlibs);
}

export function cleanfont() {
  return deleteAsync(path.cleanfont);
}
