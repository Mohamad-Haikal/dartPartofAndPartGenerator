import * as path from 'path';

export function getRelativePath(from: string, to: string): string {
  const startChars = isSameDir(from, to) ? './' : '';
  const relativePath = toWindowsPath(relative(from, to));
  return startChars + relativePath;
}

function relative(from: string, to: string): string {
  return path.relative(
    path.dirname(from),
    to
  );
}

function toWindowsPath(relativePath: string): string {
  return relativePath.replace(/\\/gi, '/');
}

function isSameDir(from: string, to: string): boolean {
  from = path.parse(from).dir.toLowerCase().trim();
  to = path.parse(from).dir.toLowerCase().trim();
  return from === to || from.includes(to);
}