import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GithubIcon from "./GithubIcon";
import CodePenIcon from "./CodePenIcon";
import TwitterIcon from "./TwitterIcon";
import MenuIcon from "./MenuIcon";
import Menu from "../components/Menu";
// import ScrollIndicator from "./ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ animateIn, onVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  let menuIcon = useRef();
  let socialIcons = useRef();

  useEffect(() => {
    if (!animateIn) return;
    gsap.from([socialIcons, menuIcon], {
      scale: 1.25,
      yPercent: 10,
      ease: "power1.inOut",
      autoAlpha: 0,
      duration: 1.5,
      onComplete: () => {
        onVisible();
        setEnableScroll(true);
      },
    });
  }, [animateIn]);

  useEffect(() => {
    if (!enableScroll) return;
    ScrollTrigger.create({
      start: "top top",
      end: `+=${document.body.clientHeight}`,
      onUpdate: ({ direction }) => setScrollDirection(direction),
    });
  }, [enableScroll]);

  useEffect(() => {
    if (scrollDirection === null) return;
    if (scrollDirection === 1)
      gsap.to([socialIcons, menuIcon], {
        opacity: 0,
        yPercent: -50,
        duration: 1,
        ease: "power1.out",
      });
    if (scrollDirection === -1)
      gsap.to([socialIcons, menuIcon], {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.out",
      });
  }, [scrollDirection]);

  return (
    <>
      <header>
        <div className="container">
          <Menu open={menuOpen} />
          <div className="social-icons" ref={node => (socialIcons = node)}>
            <TwitterIcon />
            <CodePenIcon />
            <GithubIcon />
          </div>
          <MenuIcon
            open={menuOpen}
            ref={node => (menuIcon = node)}
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
