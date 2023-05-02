// eslint-disable-next-line
import {Palette, PaletteColor} from "@mui/material/styles/createpalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}