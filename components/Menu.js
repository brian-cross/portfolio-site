import { useEffect } from "react";
import gsap from "gsap";

export default function Menu({ open }) {
  useEffect(() => {
    handleMenu();
  }, [open]);

  function handleMenu() {
    // const menuClosed = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    // const menuOpen = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const menuClosed = "circle(0vmax at top right)";
    const menuOpen = "circle(100vmax at top right)";

    const menu = gsap.timeline();

    if (open) {
      menu
        .set(".menu", { autoAlpha: 1, clipPath: menuClosed })
        .to(".menu", { clipPath: menuOpen, duration: 0.6 })
        .fromTo(
          "li",
          { opacity: 0, xPercent: 10 },
          {
            opacity: 1,
            xPercent: 0,
            stagger: 0.1,
            ease: "power4.out",
            duration: 0.6,
          }
        );
    } else {
      menu.to(".menu", { clipPath: menuClosed }).set(".menu", { autoAlpha: 0 });
    }
  }

  return (
    <>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>
        {`
          .menu {
            visibility: hidden;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            padding-right: 5vw;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: #800;
            font-size: clamp(4rem, 15vmin, 8rem);
            text-align: right;
          }
        `}
      </style>
    </>
  );
}
