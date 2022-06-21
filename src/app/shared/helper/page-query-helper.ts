export function getPageQueryHelper(url: string) {
  return url.match(/(?<=\?).*/)[0];
}
