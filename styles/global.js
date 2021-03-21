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
    background: ${theme.colors.htmlBackground};
  }

  body {
    color: ${theme.colors.white};
    background: ${theme.colors.siteBackground};
    font-family: ${theme.fontFamily};
    user-select: none;
  }

  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  h1 {
    color: ${theme.colors.primary};
    font-size: clamp(3rem, 9vw, 9rem);
    text-transform: uppercase;
    margin: 0;
  }

  h2 {
    font-size: clamp(2.4rem, 5vw, 4rem);
  }

  a,
  p {
    font-size: 1.5rem;
  }

  input,
  textarea {
    font-size: 16px;
    outline: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${theme.colors.white};
    -webkit-box-shadow: 0 0 0px 1000px hsl(215, 15%, 25%) inset;
    border: 2px solid ${theme.colors.primary};
    //transition: background-color 5000s ease-in-out 0s;
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

  // Hiding scrollbar
  * {
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
