import { useEffect, useRef } from "react";
import gsap from "gsap";
import GithubIcon from "./GithubIcon";
import CodePenIcon from "./CodePenIcon";
import TwitterIcon from "./TwitterIcon";
import MenuIcon from "./MenuIcon";

export default function Header({ animateIn }) {
  let socialIcons = useRef();
  let menuIcon = useRef();

  useEffect(() => {
    if (!animateIn) return;

    gsap.from(socialIcons, {
      autoAlpha: 0,
      xPercent: -50,
      yPercent: -50,
    });

    gsap.from(menuIcon, {
      autoAlpha: 0,
      xPercent: 50,
      yPercent: -50,
    });
  });

  return (
    <>
      <header>
        <div className="container">
          <div className="social-icons" ref={node => (socialIcons = node)}>
            <TwitterIcon />
            <CodePenIcon />
            <GithubIcon />
          </div>
          <MenuIcon ref={node => (menuIcon = node)} />
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
