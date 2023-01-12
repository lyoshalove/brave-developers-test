export const checkSpecialSymbols = (text: string): boolean => {
  const specialSymbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return !specialSymbols.test(text);
};
