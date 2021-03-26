import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useAnimatedSection() {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    const headingSplit = new SplitText(target.querySelector("h2"));
    const text = target.querySelectorAll("p");

    const tl = gsap
      .timeline({ ease: "power2.out", paused: true })
      .from(headingSplit.chars, {
        opacity: 0,
        duration: 2.5,
        stagger: 0.03,
      })
      .from(
        text,
        {
          opacity: 0,
          scale: 0.95,
          yPercent: -10,
          duration: 1,
        },
        "<+1"
      );

    ScrollTrigger.create({
      trigger: target,
      start: "top 80%",
      end: "top 70%",
      onLeave: () => tl.timeScale(1).play(),
      onLeaveBack: () => tl.timeScale(5).reverse(),
    });
  }, []);

  return ref;
}
