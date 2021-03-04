import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import GithubIcon from "./GithubIcon";
import CodePenIcon from "./CodePenIcon";
import TwitterIcon from "./TwitterIcon";
import MenuIcon from "./MenuIcon";
import Menu from "../components/Menu";

export default function Header({ animateIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  let menuIcon = useRef();

  useEffect(() => {
    if (!animateIn) return;
    gsap.from([".social-icons", menuIcon], {
      scale: 1.25,
      yPercent: 10,
      ease: "power1.inOut",
      autoAlpha: 0,
      duration: 2,
    });
  }, [animateIn]);

  return (
    <>
      <header>
        <div className="container">
          <Menu open={menuOpen} />
          <div className="social-icons">
            <TwitterIcon />
            <CodePenIcon />
            <GithubIcon />
          </div>
          <MenuIcon
            open={menuOpen}
            ref={node => (menuIcon = node)}
            onClick={() => setMenuOpen(prev => !prev)}
          />
        </div>
      </header>
      <style jsx>
        {`
          header {
            position: fixed;
            top: 0;
            width: 100%;

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
