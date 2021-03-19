import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GithubIcon from "./GithubIcon";
import CodePenIcon from "./CodePenIcon";
import TwitterIcon from "./TwitterIcon";
import MenuIcon from "./MenuIcon";
import Menu from "../components/Menu";
import theme from "../styles/theme";
// import ScrollIndicator from "./ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ animateIn, onVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  let menuIcon = useRef();
  let socialIcons = useRef();

  useEffect(() => {
    if (!animateIn) return;
    gsap.from([menuIcon.current, socialIcons.current], {
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
      start: "5% top",
      end: "+=10%",
      onLeave: () => {
        gsap.to([menuIcon.current, socialIcons.current], {
          autoAlpha: 0,
          yPercent: -50,
          ease: "power3.out",
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to([menuIcon.current, socialIcons.current], {
          autoAlpha: 1,
          yPercent: 0,
          ease: "power3.out",
          duration: 1,
        });
      },
    });
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <Menu isOpen={menuOpen} />
          <div className="social-icons" ref={socialIcons}>
            <TwitterIcon />
            <CodePenIcon />
            <GithubIcon />
          </div>
          <MenuIcon
            open={menuOpen}
            ref={menuIcon}
            onClick={() => setMenuOpen(prev => !prev)}
          />
          {/* {enableScroll ? <ScrollIndicator /> : null} */}
        </div>
      </header>
      <style jsx>
        {`
          header {
            position: fixed;
            top: 0;
            width: 100%;
            color: ${theme.colors.headerColor};
            z-index: 1000;

            .container {
              display: flex;
              justify-content: space-between;
              width: 90%;
              margin: 2.5vw auto;

              .social-icons {
                visibility: hidden;
              }
            }
          }
        `}
      </style>
    </>
  );
}
