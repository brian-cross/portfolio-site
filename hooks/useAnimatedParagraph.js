import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useAnimatedParagraph() {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;

    const tween = gsap.from(target, {
      scale: 0.95,
      yPercent: -10,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: target,
      start: "top 60%",
      end: "top 50%",
      onLeave: () => tween.timeScale(1).play(),
      onLeaveBack: () => tween.timeScale(2.5).reverse(),
    });

    // const target = ref.current;
    // const { lines } = new SplitText(target, { type: "lines" });
    // const chars = [];
    // lines.forEach(line => {
    //   chars.push(new SplitText(line, { type: "chars" }));
    // });
    // chars.forEach(c => {
    //   const tween = gsap.from(c.chars, {
    //     // scale: 0,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power2.out",
    //     stagger: 0.03,
    //     paused: true,
    //   });
    //   ScrollTrigger.create({
    //     trigger: target,
    //     start: "top 60%",
    //     end: "top 50%",
    //     onLeave: () => tween.timeScale(1).play(),
    //     onLeaveBack: () => tween.timeScale(2.5).reverse(),
    //   });
    // });
  }, []);

  return ref;
}
