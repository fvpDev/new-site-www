export function pluralize(str) {
  switch (str) {
    default:
      return str + 's';
      break;
  }
}
export function depluralize(str) {
  switch (str) {
    default:
      return str.slice(0, -1);
      break;
  }
}
