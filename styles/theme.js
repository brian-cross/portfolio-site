const accent = "hsl(35, 67%, 54%)";
const primary = "hsl(200, 50%, 75%)";
const white = "white";
const lightGrey = "#999";
const mediumDark = "hsl(215, 15%, 25%)";
const menuBackground = "#000911";
const siteBackground = "#012";

const theme = {
  colors: {
    htmlBackground: siteBackground,
    siteBackground,
    primary,
    accent,
    white,
    lightGrey,
    mediumDark,
    menuBackground,
    scrollbar: {
      thumb: primary,
      track: mediumDark,
    },
  },
  fontFamily: `"Montserrat", sans-serif`,
};

export default theme;
