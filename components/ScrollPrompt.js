import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPrompt() {
  useEffect(() => {
    gsap
      .timeline()
      .from(".text-container", {
        xPercent: 100,
        duration: 1.5,
        ease: "sine.out",
      })
      .to(".line", { scaleX: 1, duration: 1.5, ease: "sine.out" }, "-=0.3");

    gsap.to(".scroll-prompt", {
      x: "-5vw",
      opacity: 0,
      ease: "power1.in",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".home",
        start: "10% top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <div className="scroll-prompt">
        <div className="line-container">
          <div className="line" />
        </div>
        <div className="text-container">Scroll Down</div>
      </div>
      <style jsx>
        {`
          .scroll-prompt {
            display: flex;
            position: fixed;
            overflow: hidden;
            transform-origin: left top;
            transform: rotate(-90deg) translateY(-1rem);
            left: 5vw;
            bottom: 0;

            .line-container {
              display: flex;
              align-items: center;
              width: 6rem;
              padding: 0 0.5rem;

              .line {
                width: 100%;
                height: 0.125rem;
                border-radius: 0.25rem;
                background: currentColor;
                transform: scaleX(0);
                transform-origin: right;
              }
            }
            .text-container {
              text-transform: uppercase;
            }
          }
        `}
      </style>
    </>
  );
}
