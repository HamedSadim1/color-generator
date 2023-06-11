export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export const componentToHex = (color: number): string => {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
