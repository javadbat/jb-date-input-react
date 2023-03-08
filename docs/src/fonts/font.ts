import { createGlobalStyle } from "styled-components";
//
import QuicksandVariable from './Quicksand/Quicksand-VariableFont_wght.ttf';
import VazirVariable from './Vazir/Vazirmatn[wght].woff2';

export const CommonFontsStyles = createGlobalStyle`
 @font-face {
  font-family: "vazir";
  src: url(${VazirVariable}) format('woff2');
  font-display: swap;
  font-smooth: always;
  // use font for only persian language
  unicode-range: U+0600-06FF, U+FB8A, U+067E, U+0686, U+06AF, U+200C;
}
@font-face {
  font-family: "quicksand";
  src: url(${QuicksandVariable}) format('truetype');
};
`;