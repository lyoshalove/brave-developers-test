export function sliceString(name: string) {
  if (name.length > 7) {
    return `${name.slice(0, 7)}...`;
  }
  return name;
}