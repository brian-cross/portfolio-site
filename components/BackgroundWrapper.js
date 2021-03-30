import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import theme from "../styles/theme";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundWrapper({ children }) {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    gsap.to(target, {
      y: -(target.clientWidth + target.clientHeight / 5),
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="parallax" ref={ref}>
          <span>{children}</span>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            align-items: center;
            position: absolute;
            z-index: -1;
            overflow: hidden;
            width: 95vw;
            height: 100%;
            top: 0;

            .parallax {
              flex-grow: 1;
              height: 100%;
              visibility: hidden;
              @media screen and (min-width: 1000px) {
                visibility: visible;
              }

              span {
                line-height: 0.8;
                font-size: 25rem;
                font-weight: bold;
                white-space: nowrap;
                text-transform: uppercase;
                //-webkit-text-stroke: 2px ${theme.colors.lightGrey};
                //-webkit-text-fill-color: rgba(0, 0, 0, 0);
                opacity: 0.1;
                position: absolute;
                top: 1em;
                left: 100%;
                transform-origin: top left;
                transform: rotate(90deg);
              }
            }
          }
        `}
      </style>
    </>
  );
}
