import { useEffect } from "react";
import gsap from "gsap";

export default function Menu({ open }) {
  useEffect(() => {
    handleMenu();
  }, [open]);

  function handleMenu() {
    console.log(`handleMenu(${open})`);
    const tl = gsap.timeline();

    if (open) {
      tl.set(".menu", { autoAlpha: 1 });
      tl.to(".menu", { top: "0vh" });
    } else {
      tl.to(".menu", { top: "-100vh" });
      tl.set(".menu", { autoAlpha: 0 });
    }
  }

  return (
    <>
      <div className="menu">
        <nav>
          <ul>
            <li>Works</li>
            <li>About</li>
            <li>Contact</li>
            <li>Articles</li>
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
            background-color: #800;
          }
        `}
      </style>
    </>
  );
}
