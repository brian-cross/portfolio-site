import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useSlideMenu(isOpen) {
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    linksRef.current = menuRef.current.querySelectorAll("li");

    // Initialize menu to closed state
    gsap.set(menuRef.current, {
      visibility: "visible",
      scaleX: 0,
      transformOrigin: "right",
    });
    gsap.set(linksRef.current, { opacity: 0, yPercent: 50 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Open menu
      gsap
        .timeline()
        .set(menuRef.current, { opacity: 1 })
        .to(menuRef.current, {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(linksRef.current, {
          opacity: 1,
          yPercent: 0,
          stagger: 0.1,
          ease: "power2.out",
          duration: 1.5,
        });
    } else {
      // Close menu
      gsap
        .timeline()
        .to([menuRef.current, linksRef.current], {
          opacity: 0,
          ease: "none",
          duration: 0.3,
        })
        .set(linksRef.current, {
          yPercent: 50,
        })
        .set(menuRef.current, {
          scaleX: 0,
        });
    }
  }, [isOpen]);

  return menuRef;
}
