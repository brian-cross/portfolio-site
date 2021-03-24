import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function useAnimatedSubHeading() {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    const { lines } = new SplitText(target, { type: "lines" });
    const chars = [];

    lines.forEach(line => {
      chars.push(new SplitText(line, { type: "chars" }));
    });

    chars.forEach(c => {
      gsap.set(c.chars, { opacity: 0 });
      const tween = gsap.to(c.chars, {
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.03,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: target,
        start: "top 60%",
        end: "top 50%",
        onLeave: () => tween.timeScale(1).play(),
        onLeaveBack: () => tween.timeScale(2.5).reverse(),
      });
    });
  }, []);

  return ref;
}
