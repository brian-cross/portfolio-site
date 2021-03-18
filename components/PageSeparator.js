import theme from "../styles/theme";

export default function PageSeparator() {
  return (
    <>
      <div />
      <style jsx>
        {`
          div {
            width: 100vw;
            height: 1px;
            position: absolute;
            left: -5vw;
            top: 0;
            background: ${theme.colors.primary};
          }
        `}
      </style>
    </>
  );
}
