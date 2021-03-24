import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundWrapper({ children }) {
  const ref = useRef();

  useEffect(() => {
    gsap.set(ref.current, { yPercent: 15 });
    gsap.to(ref.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="parallax" ref={ref}>
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            position: absolute;
            visibility: hidden;
            overflow: hidden;
            width: 100vw;
            height: 100%;
            left: -5vw;
            top: 0;
            z-index: -1;

            @media screen and (min-width: 1000px) {
              visibility: visible;
            }

            .parallax {
              height: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
