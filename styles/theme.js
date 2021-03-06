const accent = "hsl(35, 67%, 54%)";
const primary = "hsl(200, 50%, 75%)";
const white = "white";
const lightGrey = "hsl(200, 25%, 75%)";
const mediumDark = "hsl(215, 15%, 25%)";
const menuBackground = "#000911";
const siteBackground = "hsl(219, 41%, 13%)";
const sectionBgMain = `linear-gradient(80deg, hsl(219, 41%, 13%), hsl(212, 40%, 24%))`;
const sectionBgAbout = `linear-gradient(80deg, hsl(219, 41%, 26%), hsl(212, 40%, 48%))`;
const sectionBgWork = `linear-gradient(-80deg, hsl(219, 41%, 9%), hsl(212, 40%, 20%))`;
const sectionBgContact = `linear-gradient(-80deg, hsl(219, 41%, 26%), hsl(212, 40%, 48%))`;
const footerBg = `linear-gradient(-30deg, hsl(219, 41%, 6%), hsl(212, 40%, 12%))`;

const theme = {
  colors: {
    htmlBackground: siteBackground,
    siteBackground,
    sectionBgMain,
    sectionBgAbout,
    sectionBgWork,
    sectionBgContact,
    footerBg,
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
