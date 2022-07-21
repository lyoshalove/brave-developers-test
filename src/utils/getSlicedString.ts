export function sliceString(name: string) {
  if (name.length > 9) {
    return `${name.slice(0, 9)}...`;
  }
  return name;
}