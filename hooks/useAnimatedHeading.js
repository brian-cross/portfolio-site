import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useAnimatedHeading() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) {
      const text = ref.current;
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";

      const strokeText = text.cloneNode(true);
      strokeText.setAttribute("aria-hidden", "true");
      strokeText.setAttribute(
        "style",
        `
        position: absolute;
        margin: 0;
        top: 0.05em;
        left: 0.05em;
        -webkit-text-stroke: 0.02em currentColor;
        -webkit-text-fill-color: rgba(0, 0, 0, 0);
        opacity: 0;
        `
      );

      text.style.position = "relative";
      text.parentElement.insertAdjacentElement("afterbegin", wrapper);
      wrapper.appendChild(strokeText);
      wrapper.appendChild(text);

      const textSplit = new SplitText(text);
      const strokeTextSplit = new SplitText(strokeText);

      const tl = gsap
        .timeline({
          defaults: {
            duration: 2,
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "top 85%",
            toggleActions: "none play none reverse",
          },
        })
        .from(
          textSplit.lines,
          {
            x: () => window.innerWidth * -0.1,
          },
          0
        )
        .from(
          textSplit.chars,
          {
            x: i => i * window.innerWidth * -0.01,
          },
          "<+=0.5"
        )
        .from(
          textSplit.chars,
          {
            autoAlpha: 0,
            stagger: 0.03,
          },
          "<+=0.5"
        );
      // .from(
      //   strokeTextSplit.lines,
      //   {
      //     x: () => window.innerWidth * -0.1,
      //   },
      //   0
      // )
      // .from(
      //   strokeTextSplit.chars,
      //   {
      //     x: i => i * window.innerWidth * -0.01,
      //   },
      //   "<+=0.5"
      // )
      // .fromTo(
      //   strokeTextSplit.chars,
      //   { opacity: 0 },
      //   {
      //     opacity: 0.5,
      //     stagger: 0.1,
      //   },
      //   "<+=0.5"
      // );
    }
  }, []);

  return ref;
}
