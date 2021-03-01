import { forwardRef } from "react";
import theme from "../styles/theme";
import spacing from "../styles/spacing";

const MenuIcon = forwardRef((_props, ref) => {
  return (
    <>
      <div className="menu-icon" ref={ref}>
        <div className="bar" />
        <div className="bar" />
      </div>
      <style jsx>{`
        .menu-icon {
          display: inline-block;
          position: relative;
          width: ${spacing.headerIconWidth};
          height: ${spacing.headerIconWidth};
          visibility: hidden;

          .bar {
            position: absolute;
            width: 100%;
            height: 0.3125rem;
            height: calc(${spacing.headerIconWidth} / 8);
            background: ${theme.colors.primary};

            &:first-of-type {
              top: calc(${spacing.headerIconWidth} / 4);
            }

            &:last-of-type {
              bottom: calc(${spacing.headerIconWidth} / 4);
            }
          }
        }
      `}</style>
    </>
  );
});

export default MenuIcon;
