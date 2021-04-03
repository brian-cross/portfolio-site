import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MenuIcon from "./MenuIcon";
import Menu from "../components/Menu";
import theme from "../styles/theme";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ animateIn, onVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const menuIcon = useRef();

  useEffect(() => {
    if (!animateIn) return;
    gsap.from(menuIcon.current, {
      scale: 1.25,
      yPercent: 10,
      ease: "power1.inOut",
      autoAlpha: 0,
      duration: 1.5,
      onComplete: onVisible,
    });
  }, [animateIn]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "window",
      start: "5% top",
      end: "+=5%",
      onLeave: () => {
        setScrolled(true);
        dimIcon();
      },
      onLeaveBack: () => {
        setScrolled(false);
        showIcon();
      },
    });
  }, []);

  function handleMouseEnter() {
    setMouseOver(true);
    if (scrolled) showIcon(0.3);
  }

  function handleMouseLeave() {
    setMouseOver(false);
    if (scrolled && !menuOpen) dimIcon(0.3);
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    handleClick();
    menuIcon.current.blur();
  }

  function handleClick() {
    setMenuOpen(prev => {
      if (!prev) showIcon(0.3);
      if (prev && scrolled && !mouseOver) dimIcon(0.3);

      return !prev;
    });
  }

  function dimIcon(duration = 1) {
    gsap.to(menuIcon.current, {
      opacity: 0.3,
      ease: "none",
      duration,
    });
  }

  function showIcon(duration = 1) {
    gsap.to(menuIcon.current, {
      opacity: 1,
      ease: "none",
      duration,
    });
  }

  return (
    <>
      <header>
        <div className="container">
          <Menu isOpen={menuOpen} />
          <MenuIcon
            open={menuOpen}
            ref={menuIcon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleTouchEnd}
            onClick={handleClick}
          />
        </div>
      </header>
      <style jsx>
        {`
          header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            color: ${theme.colors.lightGrey};

            .container {
              width: 90%;
              margin: 2.5vw auto;
            }
          }
        `}
      </style>
    </>
  );
}
