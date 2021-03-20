const primary = "hsl(200, 50%, 75%)";
const white = "white";
const mediumDark = "hsl(215, 15%, 25%)";
const siteBackground = "#012";

const theme = {
  colors: {
    htmlBackground: siteBackground,
    siteBackground,
    primary,
    accent: "hsl(35, 67%, 54%)",
    white,
    mediumDark,
    headerColor: white,
    menuBackground: "#000911",
    scrollbar: {
      thumb: primary,
      track: mediumDark,
    },
  },
  fontFamily: `"Montserrat", sans-serif`,
};

export default theme;
