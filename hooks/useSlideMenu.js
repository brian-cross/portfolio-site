import { useEffect, useReducer, useRef } from "react";
import gsap from "gsap";

export default function useSlideMenu(isOpen) {
  const menu = useRef();
  const links = useRef();
  const open = useRef();
  const close = useRef();

  useEffect(() => {
    links.current = menu.current.querySelectorAll("li");

    // Initialize menu
    gsap.set(menu.current, {
      visibility: "visible",
      transformOrigin: "right",
    });

    // Create the menu open / close animations
    open.current = gsap
      .timeline({ paused: true })
      .set(menu.current, { opacity: 1 })
      .fromTo(
        menu.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .fromTo(
        links.current,
        { opacity: 0, yPercent: 50 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.1,
          ease: "power2.out",
          duration: 1.5,
        }
      );

    close.current = gsap.timeline({ paused: true }).to(menu.current, {
      opacity: 0,
      ease: "none",
      duration: 0.3,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      close.current.pause();
      open.current.play(0);
    } else {
      open.current.pause();
      close.current.play(0);
    }
  }, [isOpen]);

  return menu;
}
