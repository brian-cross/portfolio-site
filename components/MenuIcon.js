import { forwardRef, useEffect } from "react";
import spacing from "../styles/spacing";
import gsap from "gsap";

const MenuIcon = forwardRef((props, ref) => {
  const { open, onClick, onMouseEnter, onMouseLeave, onTouchEnd } = props;

  useEffect(() => {
    const defaults = { duration: 0.3, ease: "power1.inOut" };

    const menuIcon = document.querySelector(".menu-icon");
    const bar = document.querySelector(".bar");

    const iconCenter = menuIcon.clientHeight / 2;
    const barCenter = bar.offsetTop + bar.clientHeight / 2;
    const shift = iconCenter - barCenter;

    if (open) {
      gsap.to(".top", { rotate: 45, y: shift, ...defaults });
      gsap.to(".bottom", { rotate: -45, y: -shift, ...defaults });
    } else {
      gsap.to([".top", ".bottom"], { rotate: 0, y: 0, ...defaults });
    }
  }, [open]);

  return (
    <>
      <div
        className="menu-icon"
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchEnd={onTouchEnd}
      >
        <div className="top bar" />
        <div className="bottom bar" />
      </div>
      <style jsx>
        {`
          .menu-icon {
            position: relative;
            margin-left: auto;
            width: ${spacing.socialIconWidth};
            height: ${spacing.socialIconWidth};
            cursor: pointer;
            visibility: hidden;

            .bar {
              position: absolute;
              width: 100%;
              height: 0.3125rem;
              height: calc(${spacing.socialIconWidth} / 8);
              background: currentColor;

              &:first-of-type {
                top: calc(${spacing.socialIconWidth} / 4);
              }

              &:last-of-type {
                bottom: calc(${spacing.socialIconWidth} / 4);
              }
            }
          }
        `}
      </style>
    </>
  );
});

export default MenuIcon;
