import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect, useRef } from "react";
import scrollReveal from "../utils/scrollReveal";

gsap.registerPlugin(SplitText);

export default function useAnimatedSection() {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    const headingSplit = new SplitText(target.querySelector("h2"), {
      type: "chars, words",
    });
    const textSplit = new SplitText(target.querySelectorAll("p"), {
      type: "lines",
    });

    const tl = gsap
      .timeline({ ease: "power2.out", paused: true })
      .from(headingSplit.chars, {
        opacity: 0,
        duration: 2.5,
        stagger: 0.03,
      })
      .from(
        textSplit.lines,
        {
          opacity: 0,
          rotate: 1.5,
          yPercent: 100,
          duration: 0.8,
          stagger: 0.1,
        },
        "<+0.6"
      );

    scrollReveal(
      target,
      () => tl.timeScale(1).play(),
      () => tl.timeScale(2).reverse()
    );
  }, []);

  return ref;
}
