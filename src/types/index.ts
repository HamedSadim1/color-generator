import Values from "values.js";
export interface IValues {
  alpha: number;
  rgb: number[];
  type: string;
  weight: number;
  hex: string;
  setColor: (color: string) => void;
  tint: (weight?: number) => Values;
  tints: (weight?: number) => Values[];
  shade: (weight?: number) => Values;
  shades: (weight?: number) => Values[];
  all: (weight?: number) => Values[];
  hexString: () => string;
  rgbString: () => string;
  getBrightness: () => number;
}
