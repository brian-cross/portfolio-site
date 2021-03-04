import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import theme from "../styles/theme";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollIndicator() {
  useEffect(() => {
    gsap.to(".indicator", {
      scaleX: 1,
      transformOrigin: "left",
      ease: "none",
      scrollTrigger: {
        trigger: ".start-trigger",
        endTrigger: ".end-trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="indicator" />
      <style jsx>{`
        .indicator {
          position: fixed;
          top: 0;
          left: 0;
          height: 1px;
          width: 100%;
          transform: scaleX(0);
          background: ${theme.colors.primary};
        }
      `}</style>
    </>
  );
}
