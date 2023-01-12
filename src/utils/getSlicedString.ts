export const sliceString = (name: string) =>
  name.length > 7 ? `${name.slice(0, 7)}...` : name;
