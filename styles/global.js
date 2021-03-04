import css from "styled-jsx/css";
import theme from "./theme";
import spacing from "./spacing";

const { scrollbar } = theme.colors;

export default css.global`
  // Globals
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-size: clamp(10px, 2.2vw, 16px);
    background: black;
  }

  body {
    color: ${theme.colors.primary};
    background: ${theme.colors.siteBackground};
    font-family: ${theme.fontFamily};
    user-select: none;
  }

  html,
  body,
  #__next {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  // Scrollbar
  * {
    scrollbar-width: thin;
    scrollbar-color: ${scrollbar.thumb} ${scrollbar.track};
  }

  ::-webkit-scrollbar {
    width: ${spacing.scrollbarWidth};
  }

  ::-webkit-scrollbar-track {
    background-color: ${scrollbar.track};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbar.thumb};
    border-radius: ${spacing.scrollbarWidth};
  }
`;
