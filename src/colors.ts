import convert from "color-convert";
import { RGB } from "color-convert/conversions";

const rgbToString = (rgb: RGB) => {
  const [r, g, b] = rgb
  return `rgb(${r}, ${g}, ${b})`
}

export const rgbFromHsl = (hsl: string) => {
  const [h, s, l] = hslFromString(hsl);
  const rgb = convert.hsl.rgb([h, s, l]);
  return rgbToString(rgb)
};

export const hslFromString = (hsl: string) => {
  return hsl
    .replace("hsl(", "")
    .replace(")", "")
    .replaceAll("%", "")
    .split(", ")
    .map((value) => Number(value));
};
