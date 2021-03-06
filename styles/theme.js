const primary = "hsl(215, 15%, 50%)";
const primaryDarkened = "hsl(215, 15%, 25%)";

const theme = {
  colors: {
    htmlBackground: "hsl(215, 100%, 10%)",
    siteBackground: `linear-gradient(180deg,hsl(215, 100%, 10%) 0%,hsl(215, 50%, 20%) 100%)`,
    primary,
    primaryDarkened,
    scrollbar: {
      thumb: primary,
      track: "hsl(215, 15%, 20%)",
    },
  },
  fontFamily: `"Montserrat", sans-serif`,
};

export default theme;
