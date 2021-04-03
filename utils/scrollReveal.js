import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal(target, revealCallback, hideCallback) {
  ScrollTrigger.create({
    trigger: target,
    start: "top 80%",
    end: "top 70%",
    onLeave: revealCallback,
    onLeaveBack: hideCallback,
  });
}
