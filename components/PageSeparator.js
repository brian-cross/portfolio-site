import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import theme from "../styles/theme";

gsap.registerPlugin(ScrollTrigger);

export default function PageSeparator() {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;

    gsap.set(target, { scaleX: 0, transformOrigin: "right" });

    ScrollTrigger.create({
      trigger: target,
      start: "top bottom",
      end: "top top",
      onEnter: show,
      onLeave: hide,
      onEnterBack: show,
      onLeaveBack: hide,
    });

    function show() {
      gsap.to(target, { scaleX: 1, ease: "power3.out", duration: 2 });
    }

    function hide() {
      gsap.to(target, { scaleX: 0 });
    }
  }, []);

  return (
    <>
      <div ref={ref} />
      <style jsx>
        {`
          div {
            width: 100vw;
            height: 1px;
            position: absolute;
            left: -5vw;
            top: 0;
            background: ${theme.colors.mediumDark};
          }
        `}
      </style>
    </>
  );
}
